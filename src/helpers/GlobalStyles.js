import { StyleSheet } from "react-native";
import Theme from "./Theme";

const GlobalStyles = StyleSheet.create({
  Bodycontainer: {
    flex: 1,
    padding: "2%",
  },
  Center: {
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonLayout: {
    backgroundColor: Theme.Brown,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    paddingVertical: "4%",
    marginVertical: "2%",
  },
  IconLayout: {
    padding: "6%",
    borderRadius: 6,
    backgroundColor: Theme.Baige,
    alignSelf: "center",
  },
});
export default GlobalStyles;
