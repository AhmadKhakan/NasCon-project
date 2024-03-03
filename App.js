import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import GlobalStyles from "./src/helpers/GlobalStyles";
import mainLogo from "./src/images/logo.png";
import Theme from "./src/helpers/Theme";
import StackNavigation from "./src/navigation/StackNavigation";
import TabNavigation from "./src/navigation/TabNavigation";
// import NavigationCon
export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(true);
    }, 3000);
  }, []);

  if (!isLoading) {
    return (
      <SafeAreaView
        style={[GlobalStyles.Bodycontainer, { backgroundColor: Theme.Brown }]}
      >
        <View
          style={[
            GlobalStyles.Bodycontainer,
            GlobalStyles.Center,
            { flexDirection: "column" },
          ]}
        >
          <Image source={mainLogo} resizeMode="contain" />
          <Text style={{ color: Theme.Yellow, textAlign: "center" }}>
            {`Your Compass to Financial\n Confidence!`}
          </Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <>
        <StatusBar />
        <NavigationContainer>
          <StackNavigation />
          {/* <TabNavigation /> */}
        </NavigationContainer>
      </>
    );
  }
}
