import React from "react";
import { View,Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import GlobalStyles from "../../helpers/GlobalStyles";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const Notifications = ({navigation}) => {

const DATA=[
  {
    id:1,
   title:"Sara has sent you a message"
  },{
    id:2,
   title:"You have transfered 1000 rupees"
  }
];


const Item = (item)=>{
  return(<View style={[{width:"100%",backgroundColor:"#392800",borderRadius:8,marign:"5%"}]}> 
  <Text style={[{textAlign:"center"}]}> {item.title}</Text>
  </View>);
}

  return (
    <LinearGradient
    colors={['#E9AB17', '#392800']}

    style={[{ flex: 1 }]}
 >
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <View style={[GlobalStyles.Bodycontainer]}>
          <View style={[{display:"flex", flexDirection:"row", marginLeft:"5%",marginTop:"10%"}]}>
          <AntDesign name="caretleft" size={24} color="black" style={[{marginLeft:"5%"}]} />
          
          <Text style={[{color:"#000",marginLeft:"25%"}]}>Notifications</Text>
          </View>
          <Text style={[{color:"#fff"}]}></Text>
          <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />


      </View>
    </SafeAreaView>
    </LinearGradient>
  );
};

export default Notifications;
