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
              const
              data={[
                { key: 0, label: "Afghanistan", value: "Afghanistan" },
                { key: 1, label: "Albania", value: "Albania" },
                { key: 2, label: "Algeria", value: "Algeria" },
                { key: 3, label: "Andorra", value: "Andorra" },
                { key: 4, label: "Angola", value: "Angola" },
                {
                  key: 5,
                  label: "Antigua and Barbuda",
                  value: "Antigua and Barbuda",
                },
                { key: 6, label: "Argentina", value: "Argentina" },
                { key: 7, label: "Armenia", value: "Armenia" },
                { key: 8, label: "Australia", value: "Australia" },
                { key: 9, label: "Austria", value: "Austria" },
                { key: 10, label: "Azerbaijan", value: "Azerbaijan" },
                { key: 11, label: "Bahamas", value: "Bahamas" },
                { key: 12, label: "Bahrain", value: "Bahrain" },
                { key: 13, label: "Bangladesh", value: "Bangladesh" },
                { key: 14, label: "Barbados", value: "Barbados" },
                { key: 15, label: "Belarus", value: "Belarus" },
                { key: 16, label: "Belgium", value: "Belgium" },
                { key: 17, label: "Belize", value: "Belize" },
                { key: 18, label: "Benin", value: "Benin" },
                { key: 19, label: "Bhutan", value: "Bhutan" },
                { key: 20, label: "Bolivia", value: "Bolivia" },
                {
                  key: 21,
                  label: "Bosnia and Herzegovina",
                  value: "Bosnia and Herzegovina",
                },
                { key: 22, label: "Botswana", value: "Botswana" },
                { key: 23, label: "Brazil", value: "Brazil" },
                { key: 24, label: "Brunei", value: "Brunei" },
                { key: 25, label: "Bulgaria", value: "Bulgaria" },
                { key: 26, label: "Burkina Faso", value: "Burkina Faso" },
                { key: 27, label: "Burundi", value: "Burundi" },
                { key: 28, label: "Cabo Verde", value: "Cabo Verde" },
                { key: 29, label: "Cambodia", value: "Cambodia" },
                { key: 30, label: "Cameroon", value: "Cameroon" },
                { key: 31, label: "Canada", value: "Canada" },
                {
                  key: 32,
                  label: "Central African Republic",
                  value: "Central African Republic",
                },
                { key: 33, label: "Chad", value: "Chad" },
                { key: 34, label: "Chile", value: "Chile" },
                { key: 35, label: "China", value: "China" },
                { key: 36, label: "Colombia", value: "Colombia" },
                { key: 37, label: "Comoros", value: "Comoros" },
                {
                  key: 38,
                  label: "Congo (Congo-Brazzaville)",
                  value: "Congo (Congo-Brazzaville)",
                },
                { key: 39, label: "Costa Rica", value: "Costa Rica" },
                { key: 40, label: "Croatia", value: "Croatia" },
                { key: 41, label: "Cuba", value: "Cuba" },
                { key: 42, label: "Cyprus", value: "Cyprus" },
                {
                  key: 43,
                  label: "Czechia (Czech Republic)",
                  value: "Czechia (Czech Republic)",
                },
                {
                  key: 44,
                  label: "Democratic Republic of the Congo (Congo-Kinshasa)",
                  value: "Democratic Republic of the Congo (Congo-Kinshasa)",
                },
                { key: 45, label: "Denmark", value: "Denmark" },
                { key: 46, label: "Djibouti", value: "Djibouti" },
                { key: 47, label: "Dominica", value: "Dominica" },
                {
                  key: 48,
                  label: "Dominican Republic",
                  value: "Dominican Republic",
                },
                {
                  key: 49,
                  label: "East Timor (Timor-Leste)",
                  value: "East Timor (Timor-Leste)",
                },
                { key: 50, label: "Ecuador", value: "Ecuador" },
                { key: 51, label: "Egypt", value: "Egypt" },
                { key: 52, label: "El Salvador", value: "El Salvador" },
                {
                  key: 53,
                  label: "Equatorial Guinea",
                  value: "Equatorial Guinea",
                },
                { key: 54, label: "Eritrea", value: "Eritrea" },
                { key: 55, label: "Estonia", value: "Estonia" },
                {
                  key: 56,
                  label: "Eswatini (fmr. 'Swaziland')",
                  value: "Eswatini (fmr. 'Swaziland')",
                },
                { key: 57, label: "Ethiopia", value: "Ethiopia" },
                { key: 58, label: "Fiji", value: "Fiji" },
                { key: 59, label: "Finland", value: "Finland" },
                { key: 60, label: "France", value: "France" },
                { key: 61, label: "Gabon", value: "Gabon" },
                { key: 62, label: "Gambia", value: "Gambia" },
                { key: 63, label: "Georgia", value: "Georgia" },
                { key: 64, label: "Germany", value: "Germany" },
                { key: 65, label: "Ghana", value: "Ghana" },
                { key: 66, label: "Greece", value: "Greece" },
                { key: 67, label: "Grenada", value: "Grenada" },
                { key: 68, label: "Guatemala", value: "Guatemala" },
                { key: 69, label: "Guinea", value: "Guinea" },
                { key: 70, label: "Guinea-Bissau", value: "Guinea-Bissau" },
                { key: 71, label: "Guyana", value: "Guyana" },
                { key: 72, label: "Haiti", value: "Haiti" },
                { key: 73, label: "Holy See", value: "Holy See" },
                { key: 74, label: "Honduras", value: "Honduras" },
                { key: 75, label: "Hungary", value: "Hungary" },
                { key: 76, label: "Iceland", value: "Iceland" },
                { key: 77, label: "India", value: "India" },
                { key: 78, label: "Indonesia", value: "Indonesia" },
                { key: 79, label: "Iran", value: "Iran" },
                { key: 80, label: "Iraq", value: "Iraq" },
                { key: 81, label: "Ireland", value: "Ireland" },
                { key: 82, label: "Israel", value: "Israel" },
                { key: 83, label: "Italy", value: "Italy" },
                { key: 84, label: "Ivory Coast", value: "Ivory Coast" },
                { key: 85, label: "Jamaica", value: "Jamaica" },
                { key: 86, label: "Japan", value: "Japan" },
                { key: 87, label: "Jordan", value: "Jordan" },
                { key: 88, label: "Kazakhstan", value: "Kazakhstan" },
                { key: 89, label: "Kenya", value: "Kenya" },
                { key: 90, label: "Kiribati", value: "Kiribati" },
                { key: 91, label: "Kuwait", value: "Kuwait" },
                { key: 92, label: "Kyrgyzstan", value: "Kyrgyzstan" },
                { key: 93, label: "Laos", value: "Laos" },
                { key: 94, label: "Latvia", value: "Latvia" },
                { key: 95, label: "Lebanon", value: "Lebanon" },
                { key: 96, label: "Lesotho", value: "Lesotho" },
                { key: 97, label: "Liberia", value: "Liberia" },
                { key: 98, label: "Libya", value: "Libya" },
                { key: 99, label: "Liechtenstein", value: "Liechtenstein" },
                { key: 100, label: "Lithuania", value: "Lithuania" },
                { key: 101, label: "Luxembourg", value: "Luxembourg" },
                { key: 102, label: "Madagascar", value: "Madagascar" },
                { key: 103, label: "Malawi", value: "Malawi" },
                { key: 104, label: "Malaysia", value: "Malaysia" },
                { key: 105, label: "Maldives", value: "Maldives" },
                { key: 106, label: "Mali", value: "Mali" },
                { key: 107, label: "Malta", value: "Malta" },
                {
                  key: 108,
                  label: "Marshall Islands",
                  value: "Marshall Islands",
                },
                { key: 109, label: "Mauritania", value: "Mauritania" },
                { key: 110, label: "Mauritius", value: "Mauritius" },
                { key: 111, label: "Mexico", value: "Mexico" },
                { key: 112, label: "Micronesia", value: "Micronesia" },
                { key: 113, label: "Moldova", value: "Moldova" },
                { key: 114, label: "Monaco", value: "Monaco" },
                { key: 115, label: "Mongolia", value: "Mongolia" },
                { key: 116, label: "Montenegro", value: "Montenegro" },
                { key: 117, label: "Morocco", value: "Morocco" },
                { key: 118, label: "Mozambique", value: "Mozambique" },
                {
                  key: 119,
                  label: "Myanmar (formerly Burma)",
                  value: "Myanmar (formerly Burma)",
                },
                { key: 120, label: "Namibia", value: "Namibia" },
                { key: 121, label: "Nauru", value: "Nauru" },
                { key: 122, label: "Nepal", value: "Nepal" },
                { key: 123, label: "Netherlands", value: "Netherlands" },
                { key: 124, label: "New Zealand", value: "New Zealand" },
                { key: 125, label: "Nicaragua", value: "Nicaragua" },
                { key: 126, label: "Niger", value: "Niger" },
                { key: 127, label: "Nigeria", value: "Nigeria" },
                { key: 128, label: "North Korea", value: "North Korea" },
                {
                  key: 129,
                  label: "North Macedonia (formerly Macedonia)",
                  value: "North Macedonia (formerly Macedonia)",
                },
                { key: 130, label: "Norway", value: "Norway" },
                { key: 131, label: "Oman", value: "Oman" },
                { key: 132, label: "Pakistan", value: "Pakistan" },
                { key: 133, label: "Palau", value: "Palau" },
                {
                  key: 134,
                  label: "Palestine State",
                  value: "Palestine State",
                },
                { key: 135, label: "Panama", value: "Panama" },
                {
                  key: 136,
                  label: "Papua New Guinea",
                  value: "Papua New Guinea",
                },
                { key: 137, label: "Paraguay", value: "Paraguay" },
                { key: 138, label: "Peru", value: "Peru" },
                { key: 139, label: "Philippines", value: "Philippines" },
                { key: 140, label: "Poland", value: "Poland" },
                { key: 141, label: "Portugal", value: "Portugal" },
                { key: 142, label: "Qatar", value: "Qatar" },
                { key: 143, label: "Romania", value: "Romania" },
                { key: 144, label: "Russia", value: "Russia" },
                { key: 145, label: "Rwanda", value: "Rwanda" },
                {
                  key: 146,
                  label: "Saint Kitts and Nevis",
                  value: "Saint Kitts and Nevis",
                },
                { key: 147, label: "Saint Lucia", value: "Saint Lucia" },
                {
                  key: 148,
                  label: "Saint Vincent and the Grenadines",
                  value: "Saint Vincent and the Grenadines",
                },
                { key: 149, label: "Samoa", value: "Samoa" },
                { key: 150, label: "San Marino", value: "San Marino" },
                {
                  key: 151,
                  label: "Sao Tome and Principe",
                  value: "Sao Tome and Principe",
                },
                { key: 152, label: "Saudi Arabia", value: "Saudi Arabia" },
                { key: 153, label: "Senegal", value: "Senegal" },
                { key: 154, label: "Serbia", value: "Serbia" },
                { key: 155, label: "Seychelles", value: "Seychelles" },
                { key: 156, label: "Sierra Leone", value: "Sierra Leone" },
                { key: 157, label: "Singapore", value: "Singapore" },
                { key: 158, label: "Slovakia", value: "Slovakia" },
                { key: 159, label: "Slovenia", value: "Slovenia" },
                {
                  key: 160,
                  label: "Solomon Islands",
                  value: "Solomon Islands",
                },
                { key: 161, label: "Somalia", value: "Somalia" },
                { key: 162, label: "South Africa", value: "South Africa" },
                { key: 163, label: "South Korea", value: "South Korea" },
                { key: 164, label: "South Sudan", value: "South Sudan" },
                { key: 165, label: "Spain", value: "Spain" },
                { key: 166, label: "Sri Lanka", value: "Sri Lanka" },
                { key: 167, label: "Sudan", value: "Sudan" },
                { key: 168, label: "Suriname", value: "Suriname" },
                { key: 169, label: "Sweden", value: "Sweden" },
                { key: 170, label: "Switzerland", value: "Switzerland" },
                { key: 171, label: "Syria", value: "Syria" },
                { key: 172, label: "Tajikistan", value: "Tajikistan" },
                { key: 173, label: "Tanzania", value: "Tanzania" },
                { key: 174, label: "Thailand", value: "Thailand" },
                {
                  key: 175,
                  label: "Timor-Leste (East Timor)",
                  value: "Timor-Leste (East Timor)",
                },
                { key: 176, label: "Togo", value: "Togo" },
                { key: 177, label: "Tonga", value: "Tonga" },
                {
                  key: 178,
                  label: "Trinidad and Tobago",
                  value: "Trinidad and Tobago",
                },
                { key: 179, label: "Tunisia", value: "Tunisia" },
                { key: 180, label: "Turkey", value: "Turkey" },
                { key: 181, label: "Turkmenistan", value: "Turkmenistan" },
                { key: 182, label: "Tuvalu", value: "Tuvalu" },
                { key: 183, label: "Uganda", value: "Uganda" },
                { key: 184, label: "Ukraine", value: "Ukraine" },
                {
                  key: 185,
                  label: "United Arab Emirates",
                  value: "United Arab Emirates",
                },
                { key: 186, label: "United Kingdom", value: "United Kingdom" },
                {
                  key: 187,
                  label: "United States of America",
                  value: "United States of America",
                },
                { key: 188, label: "Uruguay", value: "Uruguay" },
                { key: 189, label: "Uzbekistan", value: "Uzbekistan" },
                { key: 190, label: "Vanuatu", value: "Vanuatu" },
                { key: 191, label: "Venezuela", value: "Venezuela" },
                { key: 192, label: "Vietnam", value: "Vietnam" },
                { key: 193, label: "Yemen", value: "Yemen" },
                { key: 194, label: "Zambia", value: "Zambia" },
                { key: 195, label: "Zimbabwe", value: "Zimbabwe" },
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
                onPress={() => navigation.navigate("SignIn")}
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
