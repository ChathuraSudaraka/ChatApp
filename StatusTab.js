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
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const StatusScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

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
    <TouchableOpacity
      style={styles.statusItem}
      onPress={() => {
        const statusImages = [
          require("./assets/logo.png"),
          require("./assets/Load.png"),
          require("./assets/chat.png"),
          require("./assets/SignUp.png"),
          require("./assets/chat.png"),
        ];
        navigation.navigate("ViewStatus", { statusImages });
      }}
    >
      <View style={styles.statusImageContainer}>
        <Image source={item.statusImage} style={styles.statusImage} />
      </View>
      <View style={styles.statusTextContainer}>
        <Text style={styles.statusName}>{item.name}</Text>
        <Text style={styles.statusTimeAgo}>{item.timeAgo}</Text>
      </View>
    </TouchableOpacity>
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
    backgroundColor: "#1E1E1E", // White background color
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#3A3A3A", // Light gray separator color
    backgroundColor: "#2A2A2A", // White status item background color
  },
  statusImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E0E0E0", // Gray background for status image
    justifyContent: "center",
    alignItems: "center",
  },
  statusImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statusTextContainer: {
    marginLeft: 16,
  },
  statusName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF", // Black text color for names
  },
  statusTimeAgo: {
    fontSize: 16,
    color: "#4CAF50", // Gray text color for timestamps
  },
});

export default StatusScreen;
