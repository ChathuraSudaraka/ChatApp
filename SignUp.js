import React from "react";
import * as ImagePicker from "expo-image-picker";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
} from "react-native";

export function SignUp() {
  const ui = (
    <SafeAreaView style={style.container}>
      <StatusBar hidden={true} />

      <View style={style.container}>
        <Text style={style.title}>Sign Up</Text>
        <Text>First Name</Text>
        <TextInput style={style.input} placeholder="First Name" />
        <Text>Last Name</Text>
        <TextInput style={style.input} placeholder="Last Name" />
        <Text>Mobile Number</Text>
        <TextInput style={style.input} placeholder="Mobile" />
        <Text>Password</Text>
        <TextInput style={style.input} placeholder="Password" />
        <Text>Country</Text>
        {/* <SelectDropDown><SelectDropDown/> */}
        <Button title="Sign Up" />
      </View>
      <Button
        title="Select Profile Picture"
        onPress={async () => {
          const result = await ImagePicker.launchImageLibraryAsync();

          if (!result.canceled) {
            Alert.alert("Image Selected", result.uri);
          } else {
            Alert.alert("Image Selection Cancelled");
          }
        }}
      />
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
