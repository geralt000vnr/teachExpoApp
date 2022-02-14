import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";

const Otp = ({ onPress, navigation }) => {
  const [otpInput, setOtpInput] = useState();

  const [loaded] = useFonts({
    MochiyPopPOneRegular: require("../../assets/fonts/Mochiy_Pop_P_One/MochiyPopPOne-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginHorizontal: 10,
        flex: 1,
      }}
    >
      <Text
        style={{
          color: "#dd4830",
          fontSize: 23,
          fontFamily: "MochiyPopPOneRegular",
          paddingVertical: 10,
        }}
      >
        Enter The 4-Digit Code Send To You
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <OTPTextView
          ref={(e) => {
            setOtpInput(e);
          }}
          tintColor="#dd4830"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUpDetails")}
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          backgroundColor: "#dd4830",
          borderRadius: 10,
          marginVertical: 10,
        }}
      >
        <Text style={{ color: "#fff" }}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Otp;
