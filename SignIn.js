import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button, // Import the Button component
} from "react-native";

export function SignIn() {
  const ui = (
    <SafeAreaView style={style.container}>
      <StatusBar hidden={true} />

      <View style={style.container}>
        <Text style={style.title}>Sign In</Text>
        <Text>Mobile Number</Text>
        <TextInput
          style={style.input}
          placeholder="Mobile"
        />
        <Text>Password</Text>
        <TextInput
          style={style.input}
          placeholder="Password"
          // onChangeText={(text) => setPassword(text)}
          // value={password}
        />
        <Button title="Sign In" />
        <Button
          title="Don't have an account? Sign Up"
          // onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </SafeAreaView>
  );
  return ui;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    width: "80%",
    padding: 15,

    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
  },
});
