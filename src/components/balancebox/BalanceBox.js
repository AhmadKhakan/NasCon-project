import React from "react";
import { Text, View } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
// import { Feather } from '@expo/vector-icons';
import Theme from "../../helpers/Theme";

const BalanceBox = () => {
  return (
    <View
      style={{
        backgroundColor: Theme.Yellow,
        borderRadius: 20,
        paddingVertical: "5%",
        paddingHorizontal: "3%",
      }}
    >
      <View style={{ justifyContent: "center" }}>
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
          Total Balance{" "}
          <Entypo
            name="chevron-small-up"
            size={24}
            color="#fff"
            // style={{ marginTop: 24 }}
          />
        </Text>
      </View>
      <Text style={{ color: "#fff", fontSize: 30, fontWeight: "900" }}>
        Rs 22,548
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: "5%",
            }}
          >
            <Feather
              style={{ backgroundColor: Theme.Green, borderRadius: 12 }}
              name="arrow-down"
              size={24}
              color="#fff"
            />
            <Text
              style={{
                marginLeft: "2%",
                color: Theme.Green,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Income
            </Text>
          </View>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
            Rs 30,500
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: "5%",
            }}
          >
            <Feather
              style={{ backgroundColor: Theme.Red, borderRadius: 12 }}
              name="arrow-down"
              size={24}
              color="#fff"
            />
            <Text
              style={{
                marginLeft: "2%",
                color: Theme.Red,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Expenses
            </Text>
          </View>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
            Rs 20,048
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceBox;
