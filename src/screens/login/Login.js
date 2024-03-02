import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../../helpers/GlobalStyles";

const Login = () => {
  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <View style={[GlobalStyles.Bodycontainer, GlobalStyles.Center]}>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
