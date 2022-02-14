import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const CreateName = ({ onPress }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
        What's Your Name
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          autoCapitalize="none"
          // autoFocus={true}
          autoComplete="password-new"
          placeholder="First Name"
          returnKeyType="next"
          style={{
            fontSize: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#dd4830",
            width: Dimensions.get("window").width - 50,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        />
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          autoCapitalize="none"
          autoComplete="password"
          placeholder="Last Name"
          enablesReturnKeyAutomatically={true}
          style={{
            fontSize: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#dd4830",
            width: Dimensions.get("window").width - 50,
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginTop: 10,
          }}
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
    </SafeAreaView>
  );
};

export default CreateName;
