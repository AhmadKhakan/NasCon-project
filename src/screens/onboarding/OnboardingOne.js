import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import GlobalStyles from "../../helpers/GlobalStyles";
import onboard1Image from "../../images/onboardingOne.png";
import onboard2Image from "../../images/onboardingTwo.png";
import onboard3Image from "../../images/onboardingThree.png";
import Theme from "../../helpers/Theme";

const OnboardingOne = ({ navigation }) => {
  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <View
        style={[
          GlobalStyles.Bodycontainer,
          { marginTop: "5%", backgroundColor: "#FFFFFF" },
        ]}
      >
        <View style={{ flex: 4 }}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
          >
            <View style={styles.slide}>
              <Image source={onboard1Image} resizeMode="contain" />
              <View style={[GlobalStyles.Center]}>
                <Text
                  style={{
                    fontSize: 32,
                    fontWeight: "800",
                    color: Theme.Yellow,
                    textAlign: "center",
                    // marginBV
                  }}
                >
                  {`Take full control\n of your finances`}
                </Text>
                <Text
                  style={{ color: "gray", textAlign: "center", fontSize: 16 }}
                >{`Managing your finances is easier\n with us :)`}</Text>
              </View>
            </View>
            <View style={styles.slide}>
              <Image source={onboard2Image} resizeMode="contain" />
              <View style={[GlobalStyles.Center]}>
                <Text
                  style={{
                    fontSize: 32,
                    fontWeight: "800",
                    color: Theme.Yellow,
                    textAlign: "center",
                    // marginBV
                  }}
                >
                  {`Seamless Transfers,\n Your Way.`}
                </Text>
                <Text
                  style={{ color: "gray", textAlign: "center", fontSize: 16 }}
                >{`Track your transaction easily,\nwith categories and financial report `}</Text>
              </View>
            </View>
            <View style={styles.slide}>
              <Image source={onboard3Image} resizeMode="contain" />
              <View style={[GlobalStyles.Center]}>
                <Text
                  style={{
                    fontSize: 32,
                    fontWeight: "800",
                    color: Theme.Yellow,
                    textAlign: "center",
                    // marginBV
                  }}
                >
                  {`Plan Wisely`}
                </Text>
                <Text
                  style={{ color: "gray", textAlign: "center", fontSize: 16 }}
                >{`Define your budget for each category\n and stay in charge!`}</Text>
              </View>
            </View>
          </Swiper>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={GlobalStyles.ButtonLayout}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              GlobalStyles.ButtonLayout,
              { backgroundColor: Theme.Baige },
            ]}
            onPress={() => navigation.navigate("login")}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "700", color: Theme.Yellow }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingOne;

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#9DD6EB",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  dot: {
    backgroundColor: Theme.Baige,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: Theme.Yellow,
    width: 16,
    height: 16,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  button: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "gray",
    // padding: 10,
    paddingHorizontal: "3%",
    // textAlign: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
};
