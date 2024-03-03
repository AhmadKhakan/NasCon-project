import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../helpers/GlobalStyles";
import emailImage from "../../images/email.png";

const EmailSent = ({navigation}) => {
  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <View style={[GlobalStyles.Bodycontainer, GlobalStyles.Center]}>
        <View style={[GlobalStyles.Center, { flex: 3 }]}>
          <Image source={emailImage} resizeMode="contain" />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "2%",
            }}
          >
            Your email is on the way
          </Text>
          <Text style={{ textAlign: "center" }}>
            {`Check your email and follow the\n instructions to reset your password`}
          </Text>
        </View>
        <View style={{ flex: 1, width: "90%" }}>
          <TouchableOpacity
            style={GlobalStyles.ButtonLayout}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>
              Continue
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[GlobalStyles.ButtonLayout]}
            onPress={() => navigation.navigate("notification")}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>
              Back To Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailSent;
