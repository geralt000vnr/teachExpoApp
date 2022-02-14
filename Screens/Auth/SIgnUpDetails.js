import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import SelectLocation from "./SelectLocation";
import Tags from "react-native-tags";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const SIgnUpDetails = ({ navigation }) => {
  const [checked, setChecked] = useState("second");
  const [bankName, setBankName] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [IFSCCode, setIFSCCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedValue, setSelectedValue] = useState("AdharCard");

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 10,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "#dd4830",
            paddingVertical: 10,
            fontFamily: "MochiyPopPOneRegular",
          }}
        >
          Please Select Your Mode
        </Text>
        <View
          style={{
            alignItems: "center",
            marginVertical: 10,
            marginHorizontal: 10,
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
        <Tags
          initialText=""
          textInputProps={{
            placeholder: "What Would You Like To Learn...",
          }}
          initialTags={[]}
          onChangeTags={(tags) => console.log(tags)}
          onTagPress={(index, tagLabel, event, deleted) =>
            console.log(
              index,
              tagLabel,
              event,
              deleted ? "deleted" : "not deleted",
            )
          }
          inputContainerStyle={{
            // backgroundColor: "black",
            // padding: 10,
            height: 60,
          }}
          containerStyle={{
            justifyContent: "center",
          }}
          inputStyle={{
            backgroundColor: "#eef",
            fontSize: 20,
            width: Dimensions.get("window").width - 20,
          }}
          renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
            <TouchableOpacity
              onPress={onPress}
              key={`${tag}-${index}`}
              style={{
                backgroundColor: "#51b6e3",
                marginHorizontal: 2,
                marginVertical: 5,
                paddingVertical: 5,
                paddingHorizontal: 5,
                borderRadius: 50,
                flexDirection: "row",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, marginHorizontal: 3 }}
              >
                {tag}
              </Text>
            </TouchableOpacity>
          )}
        />
        <Text
          style={{
            color: "#dd4830",
            paddingVertical: 10,
            fontFamily: "MochiyPopPOneRegular",
          }}
        >
          Enter Bank Details
        </Text>
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
            width: Dimensions.get("window").width - 80,
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
            width: Dimensions.get("window").width - 80,
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
            width: Dimensions.get("window").width - 80,
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
            width: Dimensions.get("window").width - 80,
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
            width: Dimensions.get("window").width - 80,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        />
        <SelectLocation />
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Adhar Card" value="AdharCard" />
          <Picker.Item label="Voter ID Card" value="VoterIDCard" />
        </Picker>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
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
      </View>
    </SafeAreaView>
  );
};

export default SIgnUpDetails;
