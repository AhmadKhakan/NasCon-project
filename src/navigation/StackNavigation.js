import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingOne from "../screens/onboarding/OnboardingOne";
import Login from "../screens/login/Login";
import Register from "../screens/register/Register";
import EmailSent from "../screens/emailsent/EmailSent";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="onboardingone" component={OnboardingOne} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} /> */}
      <Stack.Screen name="email" component={EmailSent} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
