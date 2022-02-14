import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [loaded] = useFonts({
    ShadowIntoLight: require("../../assets/fonts/Shadows_Into_Light/ShadowsIntoLight-Regular.ttf"),
  });

  const [phone, setPhone] = useState("9876543210");

  const handleLogin = () => {
    const data = new FormData();
    data.append("phone", phone);
  };

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      {/* <Text>hehe bro, this is login page</Text> */}
      <View style={styles.headerComponent}>
        <View style={{ flex: 2, justifyContent: "flex-end" }}>
          <Text
            style={{
              fontSize: 50,
              fontFamily: "ShadowIntoLight",
              fontWeight: "bold",
              color: "#dd4830",
            }}
          >
            Teach
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              padding: 10,
              height: 50,
              width: "45%",
              borderWidth: 2,
              borderColor: "#dd4830",
              borderRadius: 10,
              color: "#dd4830",
              fontSize: 20,
              marginRight: 10,
              textAlign: "center",
            }}
            onPress={() => navigation.navigate("Registeration")}
          >
            Register
          </Text>
          <Text style={styles.loginBtn}>Login</Text>
        </View>
      </View>
      <View style={{ margin: 20, flex: 1, justifyContent: "space-evenly" }}>
        <Text style={{ marginVertical: 10, fontSize: 15, color: "gray" }}>
          Please Enter Your Registered Mobile Number Below
        </Text>
        <View />
        <TextInput
          style={styles.input}
          placeholder="Enter Your phone"
          onChange={setPhone}
          value={phone}
        />
        <TouchableOpacity onPress={handleLogin}>
          <View
            style={{
              backgroundColor: "#dd4830",
              width: "100%",
              height: 60,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 80,
            }}
          >
            <Text style={{ color: "white", fontSize: 25 }}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerComponent: {
    flex: 1,
    backgroundColor: "#ddf",
    padding: 20,
    width: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    padding: 10,
    backgroundColor: "#dd4830",
    width: "45%",
    height: 50,
    borderRadius: 10,
    color: "white",
    fontSize: 20,
    marginLeft: 10,
    textAlign: "center",
  },
  input: {
    marginVertical: 5,
    borderBottomColor: "#dd4830",
    borderBottomWidth: 1,
    fontSize: 18,
    padding: 5,
  },
});
