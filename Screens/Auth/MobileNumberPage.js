import { useFonts } from "expo-font";
import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PhoneInput from "react-native-phone-number-input";

const MobileNumber = ({ onPress }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(<PhoneInput />, null);

  const [loaded] = useFonts({
    MochiyPopPOneRegular: require("../../assets/fonts/Mochiy_Pop_P_One/MochiyPopPOne-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View
      style={{
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
        Enter Your Mobile Number
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <PhoneInput
          ref={phoneInput}
          //   defaultValue={value}
          value={value}
          keyboardType="numeric"
          defaultCode="IN"
          layout="first"
          placeholder="9876543210"
          onChangeText={(text) => {
            if (text.length <= 10) {
              setValue(text);
            } else {
              console.log("text", text);
            }
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          // withDarkTheme
          withShadow
          // autoFocus
        />
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: "#dd4830",
          width: 40,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 50,
          right: 10,
          transform: [{ scale: 1.5 }],
        }}
      >
        <Image
          source={require("../../assets/icon/Arrow.png")}
          style={{
            transform: [{ rotate: "180deg" }],
            height: 10,
            width: 15,
            marginVertical: 4,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MobileNumber;
