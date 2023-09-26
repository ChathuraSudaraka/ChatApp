import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Animated,
  SafeAreaView,
  Modal,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // Import ImagePicker
import ModalSelector from "react-native-modal-selector";

export function SignUp() {
  const [fadeAnimation] = useState(new Animated.Value(0));
  const [profileImage, setProfileImage] = useState(null);
  const [service, setService] = useState("");
  const [modalVisible, setModalVisible] = useState(false); // State for the modal
  const navigation = useNavigation();
  const imagePickerRef = useRef(null);

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleImagePick = async () => {
    setModalVisible(true); // Show the image source modal
  };

  const selectImageSource = async (source) => {
    setModalVisible(false); // Close the image source modal

    if (source === "camera") {
      const permissionResult =
        await ImagePicker.requestCameraPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access the camera is required!");
        return;
      }

      const result = await ImagePicker.launchCameraAsync();

      if (!result.canceled) {
        const { assets } = result;
        if (assets.length > 0) {
          setProfileImage(assets[0].uri);
        }
      }
    } else if (source === "gallery") {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access the camera roll is required!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled) {
        const { assets } = result;
        if (assets.length > 0) {
          setProfileImage(assets[0].uri);
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("./assets/SignUp.png")}
        style={styles.background}
      >
        <StatusBar barStyle="light-content" />

        <View style={styles.container}>
          <Animated.View style={[styles.content, { opacity: fadeAnimation }]}>
            <Text style={styles.title}>SIGN UP</Text>
            <TouchableOpacity
              style={styles.profileImageContainer}
              onPress={handleImagePick}
            >
              {profileImage ? (
                <Image
                  source={{ uri: profileImage }}
                  style={styles.profileImage}
                />
              ) : (
                <Text style={styles.profileImageText}>Select Image</Text>
              )}
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#fff"
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#fff"
            />
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              keyboardType="number-pad"
              placeholderTextColor="#fff"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#fff"
            />
            {/* Service dropdown */}
            <ModalSelector
              data={[
                { key: 0, label: "Sri Lanka", value: "Sri Lanka" },
                { key: 1, label: "Australia", value: "Australia" },
                { key: 2, label: "United States", value: "United States" },
                { key: 3, label: "United Kingdom", value: "United Kingdom" },
                { key: 4, label: "Italy", value: "Italy" },
              ]}
              initValue="Select a Country..."
              accessible={true}
              scrollViewAccessibilityLabel={"Scrollable options"}
              cancelButtonAccessibilityLabel={"Cancel Button"}
              onChange={(option) => setService(option.value)}
            >
              <TextInput
                style={[styles.input, styles.selectInput]}
                editable={false}
                placeholder="Select a Country..."
                placeholderTextColor="#fff"
                value={service}
              />
            </ModalSelector>
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Already have an account?</Text>
              <TouchableOpacity
                style={styles.signInButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.signInButtonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </ImageBackground>

      {/* Image Source Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Image Source</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => selectImageSource("camera")}
            >
              <Text style={styles.modalButtonText}>Camera</Text>
            </Pressable>
            <Pressable
              style={styles.modalButton}
              onPress={() => selectImageSource("gallery")}
            >
              <Text style={styles.modalButtonText}>Gallery</Text>
            </Pressable>
            <Pressable
              style={styles.modalButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  content: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#fff",
  },
  profileImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20,
    overflow: "hidden",
  },
  profileImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  profileImageText: {
    color: "#fff",
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#fff",
  },
  selectInput: {
    paddingVertical: 10,
  },
  signUpButton: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signInText: {
    color: "#fff",
    marginRight: 5,
  },
  signInButton: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  signInButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    width: 200,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SignUp;
