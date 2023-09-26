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
  // Define your chatData
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
    backgroundColor: "#FFFFFF", // White background color
  },
  // Add your specific styles for the Chats screen here
  // Example:
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DCDCDC", // Light gray separator color
    backgroundColor: "#FFFFFF", // White chat item background color
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000", // Black text color for names
  },
  message: {
    fontSize: 16,
    color: "#000000", // Black text color for messages
  },
  // Add more styles as needed
});

export default ChatsScreen;
