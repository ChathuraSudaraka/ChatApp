import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsScreen from "./ChatsTab";
import StatusScreen from "./StatusTab";
import CallsScreen from "./CallTab";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Chats") {
            iconName = "chatbubbles-outline";
          } else if (route.name === "Status") {
            iconName = "ellipse-outline";
          } else if (route.name === "Calls") {
            iconName = "call-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },

        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
        tabBarStyle: {
          backgroundColor: "#012223",
        },
      })}
    >
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
}
