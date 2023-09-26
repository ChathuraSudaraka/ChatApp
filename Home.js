import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, FlatList, Text, Image } from "react-native";

const chatData = [
  {
    id: "1",
    name: "John",
    message: "Hello, how are you?",
    timestamp: "2:30 PM",
    profileImage: require("./assets/logo.png"), // Add the correct image file path
  },
  {
    id: "2",
    name: "Alice",
    message: "I'm good, thanks!",
    timestamp: "2:32 PM",
    profileImage: require("./assets/logo.png"), // Add the correct image file path
  },
  {
    id: "3",
    name: "Bob",
    message: "Let's meet tomorrow!",
    timestamp: "3:15 PM",
    profileImage: require("./assets/logo.png"), // Add the correct image file path
  },
  // Add more chat items as needed
];

export function Home() {
  const renderItem = ({ item }) => (
    <View style={styles.chatItem}>
      <Image source={item.profileImage} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12193D", // Dark blue background color
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#000000", // Dark blue separator color
    backgroundColor: "#162A5E", // Dark blue chat item background color
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF", // White text color for names
  },
  message: {
    fontSize: 16,
    color: "#C3D7FF", // Light blue text color for messages
  },
  timestamp: {
    fontSize: 14,
    color: "#8E9BB7", // Gray text color for timestamps
  },
});

export default Home;
