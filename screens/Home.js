import React from "react";
import { View } from "react-native";
import { Ionicons, MaterialIcons, Feather, AntDesign } from "@expo/vector-icons";

export default function Home() {
    return (
      <View 
        style={{
          backgroundColor: "white", 
          flex: 1, 
          paddingTop: 55, 
          paddingHorizontal: 20,
        }}
      >
        <View 
          style={{ 
            flexDirerction: "row", 
            justifyContent: "space-between", 
            alighItems: "center",
          }}
        >
          <Ionicons name="ios-menu-outline" size={24} color="black" />
          <MaterialIcons name="phone-iphone" size={24} color="black" />
          <View style={{flexDirection: "row"}}>
            <Feather name="search" size={21} color="black" /> 
            <AntDesign name="notification" size={21} color="black" />

          </View>
        </View>
      </View>
    );
}