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

const CreatePassword = ({ onPress }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
        Create Your Account Password
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          // autoFocus={true}
          autoComplete="password-new"
          placeholder="Enter password"
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
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          autoComplete="password"
          placeholder="Confirm password"
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

export default CreatePassword;
