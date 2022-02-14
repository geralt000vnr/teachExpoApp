import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#dd4830", zIndex: 5 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#dd4830" }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#dd4830",
            alignItems: "center",
            marginBottom: 10,
            paddingLeft: 10,
          }}
        >
          <Image
            source={require("../assets/profileImg1.jpg")}
            style={{ height: 50, width: 50, borderRadius: 25 }}
          />
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#fff" }}>User Name</Text>
            <Text style={{ color: "#fff" }}>123, Jaipur, Rajasthan</Text>
          </View>
        </View>
        <DrawerItemList {...props} activeBackgroundColor="#000" />
      </DrawerContentScrollView>
      <TouchableOpacity
        // onPress={() => dispatch(logout())}
        style={{
          paddingHorizontal: 10,
          marginBottom: 10,

          marginHorizontal: 10,
          paddingVertical: 12,
          borderRadius: 5,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
