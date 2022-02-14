import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Tags from "react-native-tags";

const SelectTags = ({ onPress }) => {
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
        What Would You Like To Learn
      </Text>
      <View
        style={{
          alignItems: "center",
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Tags
          initialText=""
          textInputProps={{
            placeholder: "Topics...",
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
      </View>
      <Text>
        Please enter as many keywords as possible for a specific search
      </Text>
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

export default SelectTags;
