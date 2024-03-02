import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../../helpers/GlobalStyles";

const CustomerSupport = () => {
  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <View style={[GlobalStyles.Bodycontainer, GlobalStyles.Center]}>
        <Text>CustomerSupport</Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomerSupport;
