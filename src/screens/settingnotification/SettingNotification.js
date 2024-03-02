import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../../helpers/GlobalStyles";

const SettingNotification = () => {
  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <View style={[GlobalStyles.Bodycontainer, GlobalStyles.Center]}>
        <Text>SettingNotification</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingNotification;
