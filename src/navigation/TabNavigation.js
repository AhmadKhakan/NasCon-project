import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import ActionButton from "react-native-circular-action-menu";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../screens/home/Home";
import Transactions from "../screens/transaction/Transactions";
import Budget from "../screens/budget/Budget";
import Profile from "../screens/profile/Profile";
import Theme from "../helpers/Theme";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Theme.Yellow,
        }}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="transaction"
          component={Transactions}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="compare-arrows" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="budget"
          component={Budget}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-pie"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* ActionButton component */}
      <ActionButton
        buttonColor={Theme.Yellow}
        position="center"
        radius={100}
        size={60}
      >
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Task"
          onPress={() => console.log("notes tapped!")}
        >
          <Icon name="android-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Notifications"
          onPress={() => {}}
        >
          <Icon
            name="android-notifications-none"
            style={styles.actionButtonIcon}
          />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="All Tasks"
          onPress={() => {}}
        >
          <Icon name="android-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
