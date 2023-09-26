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
      <View style={styles.callDetails}>
        <View style={styles.callDetailRow}>
          <Text style={styles.callName}>{item.name}</Text>
          <Text style={styles.callTimestamp}>{item.timestamp}</Text>
        </View>
        <View style={styles.callDetailRow}>
          <Text style={styles.callType}>
            {item.callType === "incoming" ? "Incoming" : "Outgoing"}
          </Text>
        </View>
      </View>
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
    backgroundColor: "#1E1E1E", // White background color
  },
  callItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#3A3A3A", // Light gray separator color
    backgroundColor: "#2A2A2A", // White call item background color
  },
  callProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  callDetails: {
    flex: 1,
    justifyContent: "center",
  },
  callDetailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  callName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF", // Black text color for names
  },
  callTimestamp: {
    fontSize: 16,
    color: "#CCCCCC", // Gray text color for timestamps
  },
  callType: {
    fontSize: 16,
    color: "#4CAF50", // Blue text color for call type
  },
});

export default CallsScreen;
