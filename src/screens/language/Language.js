import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../../helpers/GlobalStyles";

const Language = () => {
  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <View style={[GlobalStyles.Bodycontainer, GlobalStyles.Center]}>
        <Text>Language</Text>
      </View>
    </SafeAreaView>
  );
};

export default Language;
