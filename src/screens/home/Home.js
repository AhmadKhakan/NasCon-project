import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GlobalStyles from "../../helpers/GlobalStyles";
import Theme from "../../helpers/Theme";
import BalanceBox from "../../components/balancebox/BalanceBox";
import backgroundImage from "../../images/HomepageBackground.png";

const demoTransactionsData = [
  {
    id: "0",
    title: "Shopping",
    description: "Bought Dress",
    amount: 5850,
    type: "-",
    time: "11:00 Am",
    icon: "",
  },
  {
    id: "1",
    title: "Transfer",
    description: "Amount Sent To Sarah",
    amount: 1000,
    type: "-",
    time: "03:00 Pm",
    icon: "",
  },
  {
    id: "2",
    title: "Income",
    description: "Upwork Payment",
    amount: 2850,
    type: "+",
    time: "10:00 Pm",
    icon: "",
  },
];

const demoChatList = [
  { id: "0", name: "yo" },
  { id: "1", name: "yo" },
  { id: "2", name: "yo" },
  { id: "3", name: "yo" },
];

const Home = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      //   resizeMode="contain"
      style={{ flex: 1 }}
    >
      <SafeAreaView style={GlobalStyles.Bodycontainer}>
        <View
          style={[
            GlobalStyles.Bodycontainer,
            //   GlobalStyles.Center,

            {
              marginTop: "10%",
              paddingHorizontal: "5%",
              //   backgroundColor: Theme.Brown,
            },
          ]}
        >
          <View
            style={{
              // backgroundColor: "pink",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ color: "#fff", fontSize: 24 }}>Good Morning</Text>
              <Text style={{ color: "#fff", fontSize: 32, fontWeight: "700" }}>
                Saad
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                //   backgroundColor: "orange",
              }}
            >
              <TouchableOpacity
                style={[GlobalStyles.IconLayout, { marginRight: "5%" }]}
              >
                <MaterialCommunityIcons
                  name="signal-cellular-outline"
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
              <TouchableOpacity style={GlobalStyles.IconLayout}>
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* balance box below  */}
          <BalanceBox />
          {/* transactions list below */}
          <View style={{ marginVertical: "10%" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700" }}>
                Transactions history
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    backgroundColor: "gray",
                    borderRadius: 20,
                    paddingHorizontal: "3%",
                    paddingVertical: "1%",
                    color: "#fff",
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={demoTransactionsData}
              key={(item) => item.id}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: "4%",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        borderRadius: 16,
                        backgroundColor: "pink",
                        padding: "5%",
                        height: 50,
                        width: 50,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>yo</Text>
                    </View>
                    <View
                      style={{ marginLeft: "4%", justifyContent: "center" }}
                    >
                      <Text style={{ fontSize: 16, fontWeight: "500" }}>
                        {item.title}
                      </Text>
                      <Text style={{ color: "gray", fontSize: 13 }}>
                        {item.description}
                      </Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    {item.type == "-" ? (
                      <Text
                        style={{
                          color: Theme.Red,
                          fontSize: 18,
                          fontWeight: "700",
                        }}
                      >{`- Rs ${item.amount}`}</Text>
                    ) : (
                      <Text
                        style={{
                          color: Theme.Green,
                          fontSize: 18,
                          fontWeight: "700",
                        }}
                      >{`+ Rs ${item.amount}`}</Text>
                    )}
                    <Text
                      style={{
                        fontSize: 13,
                        textAlign: "right",
                        color: "gray",
                      }}
                    >
                      {item.time}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>

          {/* chat list below  */}
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: "4%",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700" }}>Chat</Text>
              <TouchableOpacity>
                <Text
                  style={
                    {
                      //   backgroundColor: "gray",
                      //   borderRadius: 20,
                      //   paddingHorizontal: "2%",
                      //   paddingVertical: "1%",
                    }
                  }
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={demoChatList}
            key={(item) => item.id}
            horizontal={true}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "pink",
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                  //   marginTop: "10%",
                }}
              >
                <Text>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
