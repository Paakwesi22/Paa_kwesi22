import React from "react";
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity,
  Pressable,
  Button,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Login({navigation}) {
  return (
    <View 
      style={{ 
        flex: 1, 
        alightItems: "center",
        backgroundColor: "blue", 
        justifyContent: "center" 
      }}
    >  
      <Image
        style={{
          width: 150,
          height: 150,
          borderRadius: 20,
          marginBottom: 50,
          transform: [{rotate: "00deg"}],
         }}
         source={{
             uri: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
         }}
       />
       <Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 24 }}>Welcome to</Text>
       <Text style={{ color: "Orange", fontSize: 30, fontWeight: "600" }}>
           Power Apple Shop
       </Text>
       <Pressable
         onPress={() => {
           alert("hi");
          }}
         style={{
             backgroundColor: "#e3e3e3",
             padding: 10,
             paddingHorizontal: 60,
             flexDirection: "row",
             alightItems: "center",

             borderRadius: 10,
             marginTop: 20,
         }}      
       >
         <AntDesign name="google" size={24} color="rgb(256, 100, 10)" /> 
         <Text style={{ fontSize: 17, marginLeft: 15 }}>Login with Gmail</Text>
       </Pressable>
       <TouchableOpacity
           onPress={() => {
            navigation.navigate("Home")
           }}
         activeOpacity={0.8}
         style={{
           backgroundColor: "black",
           borderRadius: 10,             
           flexDirection: "row",
           alightItems: "center",
           padding: 10,
           paddingHorizontal: 60,
           marginTop: 20,
         }}
       >
         <AntDesign name="apple1" size={24} color="white" />
         <Text style={{ fontSize: 17, color: "white", marginLeft: 15 }}>
           Login with Apple
         </Text>
       </TouchableOpacity>
       
       <TouchableOpacity>
         <Text style={{ marginTop: 10, fontWeight: "500", color: "grey" }}>
           Not a member?{" "}
           <Text style={{ color: "orange", fontweight: "bold" }}>Signup</Text>
         </Text>
       </TouchableOpacity>
       <Button color="blue" title="click here" />
      </View>
    );
}