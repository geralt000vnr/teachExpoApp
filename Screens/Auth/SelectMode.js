import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";

const SelectMode = ({ onPress }) => {
  const [checked, setChecked] = useState("second");

  const [loaded] = useFonts({
    MochiyPopPOneRegular: require("../../assets/fonts/Mochiy_Pop_P_One/MochiyPopPOne-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView
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
          fontStyle: "italic",
        }}
      >
        Select Your Mode
      </Text>
      <View
        style={{
          alignItems: "center",
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={() => setChecked("Learn")}
          style={{
            backgroundColor: checked === "Learn" ? "#ed3a53" : "#ccc",
            borderRadius: 10,
            width: "45%",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: checked === "Learn" ? "#fff" : "#000" }}>
            Learn
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setChecked("Teach")}
          style={{
            backgroundColor: checked === "Teach" ? "#ed3a53" : "#ccc",
            borderRadius: 10,
            width: "45%",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: checked === "Teach" ? "#fff" : "#000",
            }}
          >
            Teach
          </Text>
        </TouchableOpacity>
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
    </SafeAreaView>
  );
};

export default SelectMode;
