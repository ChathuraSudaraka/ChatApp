import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
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
} from "react-native";

export function SignIn() {
  const [fadeAnimation] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      source={require("./assets/chat.png")}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        <Animated.View style={[styles.content, { opacity: fadeAnimation }]}>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
          <Text style={styles.title}>SIGN IN</Text>
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

          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity style={styles.signUpButton}>
              <Text
                style={styles.signUpButtonText}
                onPress={() => navigation.navigate("SignUp")}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#fff",
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
  signInButton: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPassword: {
    alignItems: "center",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#fff",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signUpText: {
    color: "#fff",
    marginRight: 5,
  },
  signUpButton: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  signUpButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
