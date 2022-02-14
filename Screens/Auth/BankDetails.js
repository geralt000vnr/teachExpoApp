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

const BankDetails = ({ onPress }) => {
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
        Bank Details
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <TextInput
          value={bankName}
          onChangeText={setBankName}
          autoCapitalize="none"
          // autoFocus={true}
          placeholder="Bank Name"
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
          value={branchAddress}
          onChangeText={setBranchAddress}
          autoCapitalize="none"
          placeholder="Branch Address"
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
        <TextInput
          value={accountHolderName}
          onChangeText={setAccountHolderName}
          autoCapitalize="none"
          // autoFocus={true}
          placeholder="Account Holder Name"
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
          value={IFSCCode}
          onChangeText={setIFSCCode}
          autoCapitalize="none"
          placeholder="SWIFT Code"
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
        <TextInput
          value={accountNumber}
          onChangeText={setAccountNumber}
          autoCapitalize="none"
          // autoFocus={true}
          placeholder="Account Number"
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

export default BankDetails;
