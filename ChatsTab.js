import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const ChatsScreen = ({ navigation }) => {
  const chatData = [
    {
      id: "1",
      name: "John",
      message: "Hello, how are you?",
      timestamp: "2:30 PM",
      profileImage: require("./assets/logo.png"),
    },
    {
      id: "2",
      name: "Alice",
      message: "I'm good, thanks!",
      timestamp: "2:32 PM",
      profileImage: require("./assets/logo.png"),
    },
    {
      id: "3",
      name: "Bob",
      message: "Let's meet tomorrow!",
      timestamp: "3:15 PM",
      profileImage: require("./assets/logo.png"),
    },
    {
      id: "4",
      name: "Bob",
      message: "Let's meet tomorrow!",
      timestamp: "3:15 PM",
      profileImage: require("./assets/logo.png"),
    },
    {
      id: "5",
      name: "Bob",
      message: "Let's meet tomorrow!",
      timestamp: "3:15 PM",
      profileImage: require("./assets/logo.png"),
    },
    {
      id: "6",
      name: "Bob",
      message: "Let's meet tomorrow!",
      timestamp: "3:15 PM",
      profileImage: require("./assets/logo.png"),
    },
    {
      id: "7",
      name: "Bob",
      message: "Let's meet tomorrow!",
      timestamp: "3:15 PM",
      profileImage: require("./assets/logo.png"),
    },
    {
      id: "8",
      name: "Bob",
      message: "Let's meet tomorrow!",
      timestamp: "3:15 PM",
      profileImage: require("./assets/logo.png"),
    },
    {
      id: "9",
      name: "Bob",
      message: "Let's meet tomorrow!",
      timestamp: "3:15 PM",
      profileImage: require("./assets/logo.png"),
    },
    {
      id: "10",
      name: "Bob",
      message: "Let's meet tomorrow!",
      timestamp: "3:15 PM",
      profileImage: require("./assets/logo.png"),
    },
    {
      id: "11",
      name: "Bob",
      message: "Let's meet tomorrow!",
      timestamp: "3:15 PM",
      profileImage: require("./assets/logo.png"),
    },
    // Add more chat items as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate("ChatDetail", { chatItem: item })}
    >
      <Image source={item.profileImage} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E", // Dark gray background color
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#3A3A3A", // Light gray separator color
    backgroundColor: "#2A2A2A", // Darker gray chat item background color
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
    color: "#CCCCCC", // Light gray text color for messages
  },
  timestamp: {
    fontSize: 14,
    color: "#4CAF50", // Green text color for timestamps
  },
});

export default ChatsScreen;
