import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingOne from "../screens/onboarding/OnboardingOne";
import Login from "../screens/login/Login";
import Register from "../screens/register/Register";
import EmailSent from "../screens/emailsent/EmailSent";
import Notifications from "../screens/notifications/Notifications";

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
      <Stack.Screen name="notification" component={Notifications} />
      {/* <Stack.Screen name="login" component={Login}/> */}
    </Stack.Navigator>
  );
};

export default StackNavigation;
