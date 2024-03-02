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
  VerticalMargin: {
    marginVertical: 10,
  },
  ModalContainer: {
    height: 60,

    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Theme.LightGray,
    justifyContent: "center",
    // alignItems: 'center',
    // backgroundColor: 'red'
  },
  ModalComponent: {
    height: 60,
    backgroundColor: "#b2cfe7",
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Theme.LightGray,
    justifyContent: "center",
  },
  Center: {
    justifyContent: "center",
    alignItems: "center",
  },
  Heading: {
    fontSize: 20,
    fontWeight: "500",
  },
  Heading2: {
    color: Theme.LightPinkText,
    fontWeight: "800",
    fontSize: 24,
  },
  TouchElevation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default GlobalStyles;
