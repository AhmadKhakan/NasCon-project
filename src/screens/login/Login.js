// import React, { useState } from "react";
// import { View, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";
// import GlobalStyles from "../../helpers/GlobalStyles";
//   import Text from "react-native-paper"
// import logo from "./../../images/logoWithoutGradient.png";
// import { LinearGradient } from 'expo-linear-gradient';
// import { Entypo } from "@expo/vector-icons";
// import styles from "./styles"
// const Login = ({navigation}) => {
//   const [id,setId]=useState("");
//   const[password,setPassword]=useState("");
//   const [icon, setIcon] = useState("eye-with-line");
//   const [isPasswordVisible, setIsPasswordVisible] = useState(true);
//   const [eyeColor, setEyeColor] = useState(Theme.Gray);
//   const changeEyeIcon = () => {
//     if (icon == "eye") {
//       setIsPasswordVisible(true);

//       setIcon("eye-with-line");
//       setEyeColor(Gray);
//     } else {
//       setIcon("eye");
//       setIsPasswordVisible(false);
//       setEyeColor(Gray);
//     }
//   };
//   return (
//     <LinearGradient
//     colors={['#E9AB17', '#392800']}

//     style={[{ flex: 1 }]}
//  >
//     <SafeAreaView style={GlobalStyles.Bodycontainer}>
//       <View style={[GlobalStyles.Bodycontainer, GlobalStyles.Center]}>
//       <Image
//         style={{justifyContent:'center', alignItems:'center',flex:2}}
//         source={logo}
//       />
//       <View style={[{flex:1}]}>
//       <View style={[{display:"flex",flexDirection:"row"}]}>
//       <View>Email</View>
//       <TextInput
//             style={styles.inputBox}
//             value={id}
//             onChangeText={(id) => setId(id)}
//             placeholder={"username"}
//             selectionColor={Theme.Gray}
//           />
//       </View>
//       <View style={[{display:"flex",flexDirection:"row"}]}>
//       <View>Password</View>
//       <TextInput
//               style={{ padding: "2%", width: "80%" }}
//               value={password}
//               onChangeText={(password) => setPassword(password)}
//               placeholder={"*********"}
//               secureTextEntry={isPasswordVisible}
//               selectionColor={Theme.Gray}
//               keyboardType="default"
//             />
//             <TouchableOpacity
//               onPress={() => {
//                 changeEyeIcon();
//               }}
//               style={{ marginRight: "3%" }}
//             >
//               <Entypo name={icon} size={24} color={eyeColor} />
//             </TouchableOpacity>

//           </View>
//           {/* <TouchableOpacity><Text>Forgot Password?</Text></TouchableOpacity> */}
//           <TouchableOpacity style={GlobalStyles.ButtonLayout}> Login </TouchableOpacity>
//           </View>
        
//       </View>
      
//     </SafeAreaView>
//     </LinearGradient>
//   );
// };

// export default Login;
