import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import GlobalStyles from "../../helpers/GlobalStyles";
import Theme from "../../helpers/Theme";
import DropDownPicker from "react-native-dropdown-picker";
import { Switch } from "react-native-paper";
// import { TextInput } from "react-native-paper";
// import { TouchableOpacity } from "react-native-gesture-handler";

const Transfer = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const [description, setDescription] = useState("");

  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");

  const [locationInText, setLocationInText] = useState("");

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.Brown }}>
      <View style={[{ flex: 1 }]}>
        <View style={{ flex: 1, backgroundColor: Theme.Brown, padding: "10%" }}>
          <View
            style={{
              marginVertical: "5%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "25%",
            }}
          >
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={24} color="#fff" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "900",
                color: "#fff",
                marginRight: "35%",
              }}
            >
              Income
            </Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: "500", color: "#fff" }}>
            How much?
          </Text>
          <Text style={{ fontSize: 64, fontWeight: "700", color: "#fff" }}>
            Rs 0
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flex: 2,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TextInput
              placeholder="From"
              value={fromText}
              onChangeText={(text) => setFromText(text)}
              style={{
                //   backgroundColor: "pink",
                margin: "4%",
                width: "40%",
                alignSelf: "center",
                borderRadius: 16,
                borderColor: "gray",
                borderWidth: 0.5,
                paddingVertical: "3%",
                paddingHorizontal: "2%",
              }}
            />
            <View>
              <MaterialIcons
                name="compare-arrows"
                size={24}
                color={Theme.Yellow}
              />
            </View>
            <TextInput
              placeholder="To"
              value={toText}
              onChangeText={(text) => setToText(text)}
              style={{
                //   backgroundColor: "pink",
                margin: "4%",
                width: "40%",
                alignSelf: "center",
                borderRadius: 16,
                borderColor: "gray",
                borderWidth: 0.5,
                paddingVertical: "3%",
                paddingHorizontal: "2%",
              }}
            />
          </View>

          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={{
              //   backgroundColor: "pink",
              margin: "4%",
              width: "90%",
              alignSelf: "center",
              borderRadius: 16,
              borderColor: "gray",
              borderWidth: 0.5,
              paddingVertical: "3%",
              paddingHorizontal: "2%",
            }}
          />

          <TouchableOpacity
            style={{
              //   backgroundColor: "pink",
              margin: "4%",
              width: "90%",
              alignSelf: "center",
              borderRadius: 16,
              borderColor: "gray",
              borderWidth: 0.5,
              paddingVertical: "3%",
              paddingHorizontal: "2%",
              borderStyle: "dashed",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="attachment" size={24} color="gray" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "gray",
                marginLeft: "2%",
              }}
            >
              Add Attachment
            </Text>
          </TouchableOpacity>

          <View
            style={{
              //   backgroundColor: "pink",
              margin: "4%",
              width: "90%",
              alignSelf: "center",
              borderRadius: 16,
              borderColor: "gray",
              borderWidth: 0.5,
              paddingVertical: "3%",
              paddingHorizontal: "2%",
              borderStyle: "dashed",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ marginLeft: "2%" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Repeat
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "400",
                  color: "gray",
                }}
              >
                Repeat transaction
              </Text>
            </View>
            <Switch
              value={isSwitchOn}
              color={Theme.Yellow}
              onValueChange={onToggleSwitch}
            />
          </View>

          <TextInput
            placeholder="Location"
            value={locationInText}
            onChangeText={(text) => setLocationInText(text)}
            style={{
              //   backgroundColor: "pink",
              margin: "4%",
              marginBottom: 0,
              width: "90%",
              alignSelf: "center",
              borderRadius: 16,
              borderColor: "gray",
              borderWidth: 0.5,
              paddingVertical: "3%",
              paddingHorizontal: "2%",
            }}
          />

          <TouchableOpacity
            style={[
              GlobalStyles.ButtonLayout,
              {
                width: "90%",
                alignSelf: "center",
                backgroundColor: Theme.Brown,
              },
            ]}
          >
            <Text style={{ fontSize: 18, fontWeight: "500", color: "#fff" }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transfer;
