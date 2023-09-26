import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Text, Image } from "react-native";

const CallsScreen = () => {
  // Define your callData
  const callData = [
    {
      id: "1",
      name: "John",
      callType: "incoming",
      timestamp: "Yesterday, 7:30 PM",
      profileImage: require("./assets/logo.png"),
    },
    {
      id: "2",
      name: "Alice",
      callType: "outgoing",
      timestamp: "Yesterday, 6:45 PM",
      profileImage: require("./assets/logo.png"),
    },
    // Add more call items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.callItem}>
      <Image source={item.profileImage} style={styles.callProfileImage} />
      <View style={styles.callTextContainer}>
        <Text style={styles.callName}>{item.name}</Text>
        <Text style={styles.callTimestamp}>{item.timestamp}</Text>
      </View>
      <Text style={styles.callType}>
        {item.callType === "incoming" ? "Incoming" : "Outgoing"}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={callData}
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
  // Add your specific styles for the Calls screen here
  // Example:
  callItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DCDCDC", // Light gray separator color
    backgroundColor: "#FFFFFF", // White call item background color
  },
  // Add more styles as needed
});

export default CallsScreen;
