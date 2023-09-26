import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Text, Image } from "react-native";

const StatusScreen = () => {
  // Define your statusData
  const statusData = [
    {
      id: "1",
      name: "Alice",
      timeAgo: "2 hours ago",
      statusImage: require("./assets/logo.png"),
    },
    {
      id: "2",
      name: "Bob",
      timeAgo: "1 hour ago",
      statusImage: require("./assets/logo.png"),
    },
    // Add more status items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.statusItem}>
      <Image source={item.statusImage} style={styles.statusImage} />
      <View style={styles.statusTextContainer}>
        <Text style={styles.statusName}>{item.name}</Text>
        <Text style={styles.statusTimeAgo}>{item.timeAgo}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={statusData}
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
  // Add your specific styles for the Status screen here
  // Example:
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DCDCDC", // Light gray separator color
    backgroundColor: "#FFFFFF", // White status item background color
  },
  // Add more styles as needed
});

export default StatusScreen;
