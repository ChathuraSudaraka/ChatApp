import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsScreen from "./ChatsTab";
import StatusScreen from "./StatusTab";
import CallsScreen from "./CallTab";

const Tab = createBottomTabNavigator();

export function Home () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
};