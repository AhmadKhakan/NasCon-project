import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../../helpers/GlobalStyles";

const Notifications = () => {
  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <View style={[GlobalStyles.Bodycontainer, GlobalStyles.Center]}>
        <Text>Notifications</Text>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
