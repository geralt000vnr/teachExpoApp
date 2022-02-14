import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import PhoneInput from "react-native-phone-number-input";
import { useState } from "react";
import { useRef } from "react";
import Tags from "react-native-tags";
import SelectLocation from "./SelectLocation";
import { useFonts } from "expo-font";

const SignUpScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const phoneInput = useRef(<PhoneInput />, null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checked, setChecked] = useState("second");
  const [bankName, setBankName] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [IFSCCode, setIFSCCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

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
        paddingHorizontal: 10,
      }}
    >
      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => navigation.goBack(null)}
      >
        <Image source={require("../../assets/icon/Arrow.png")} />
      </TouchableOpacity>
      <ScrollView>
        <View style={{ marginVertical: 10, marginBottom: 40 }}>
          <Text
            style={{
              color: "#dd4830",
              paddingVertical: 10,
              fontFamily: "MochiyPopPOneRegular",
              textAlign: "left",
            }}
          >
            Enter Your Phone Number
          </Text>
          <PhoneInput
            ref={phoneInput}
            //   defaultValue={value}
            value={value}
            containerStyle={{
              width: "100%",
              borderBottomWidth: 1,
              borderColor: "#dd4830",
            }}
            textInputStyle={{ width: "30%" }}
            keyboardType="numeric"
            defaultCode="IN"
            layout="second"
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
            // withShadow
            // autoFocus
          />
          <Text
            style={{
              color: "#dd4830",
              paddingVertical: 10,
              fontFamily: "MochiyPopPOneRegular",
            }}
          >
            Enter Your Email Address
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            // autoFocus={true}
            autoComplete="email"
            placeholder="yourid@gmail.com"
            style={{
              fontSize: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#dd4830",
              width: "100%",
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          />
          <Text
            style={{
              color: "#dd4830",
              paddingVertical: 10,
              fontFamily: "MochiyPopPOneRegular",
            }}
          >
            Please Enter New Password
          </Text>
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
              width: "100%",
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          />
          <Text
            style={{
              color: "#dd4830",
              paddingVertical: 10,
              fontFamily: "MochiyPopPOneRegular",
            }}
          >
            Please Confirm Password
          </Text>
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
              width: "100%",
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginTop: 10,
            }}
          />
          <Text
            style={{
              color: "#dd4830",
              paddingVertical: 10,
              fontFamily: "MochiyPopPOneRegular",
            }}
          >
            Please Enter Your Name
          </Text>
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
              width: "100%",
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
              width: "100%",
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginTop: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Otp")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              backgroundColor: "#dd4830",
              borderRadius: 10,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>Proceed</Text>
          </TouchableOpacity>
          {/*  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
