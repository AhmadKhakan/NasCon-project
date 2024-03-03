import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import GlobalStyles from "../../helpers/GlobalStyles";
import Theme from "../../helpers/Theme";
import DropDownPicker from "react-native-dropdown-picker";
import { Switch } from "react-native-paper";
// import { TextInput } from "react-native-paper";
// import { TouchableOpacity } from "react-native-gesture-handler";

const Income = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const [description, setDescription] = useState("");
  const [locationInText, setLocationInText] = useState("");

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.Yellow }}>
      <View style={[{ flex: 1 }]}>
        <View
          style={{ flex: 1, backgroundColor: Theme.Yellow, padding: "10%" }}
        >
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
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "900",
                color: Theme.Green,
                marginRight: "35%",
              }}
            >
              Income
            </Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: "500", color: "gray" }}>
            How much?
          </Text>
          <Text style={{ fontSize: 64, fontWeight: "700", color: Theme.Green }}>
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
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              //   backgroundColor: "pink",
              margin: "4%",
              width: "90%",
              alignSelf: "center",
              borderRadius: 16,
              borderColor: "gray",
            }}
          />

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
                backgroundColor: Theme.Green,
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

export default Income;
