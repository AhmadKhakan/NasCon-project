import React from "react";
import { useNavigation } from "@react-navigation/native";

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    ></Stack.Navigator>
  );
};

export default StackNavigation;
