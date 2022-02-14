import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import React from "react";

const TeacherCard = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            height: 300,
            width: Dimensions.get("window").width * 0.5,
            padding: 10,
          }}
        >
          <Image
            source={require("../../assets/profileImg1.jpg")}
            style={{
              height: 200,
              width: "100%",
              borderRadius: 10,
            }}
          />

          <Text
            style={{ color: "#4472c4", fontSize: 18, fontFamily: "Lobster" }}
          >
            Teacher Name
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Rating</Text>
            <Text>4.5</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#4472c4",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              height: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>View Profile</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 300,
            width: Dimensions.get("window").width * 0.5,
            padding: 10,
          }}
        >
          <Image
            source={require("../../assets/profileImg1.jpg")}
            style={{
              height: 200,
              width: "100%",
              borderRadius: 10,
            }}
          />
          <Text
            style={{ color: "#4472c4", fontSize: 18, fontFamily: "Lobster" }}
          >
            Teacher Name
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Rating</Text>
            <Text>4.5</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#4472c4",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              height: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>View Profile</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 300,
            width: Dimensions.get("window").width * 0.5,
            padding: 10,
          }}
        >
          <Image
            source={require("../../assets/profileImg1.jpg")}
            style={{
              height: 200,
              width: "100%",
              borderRadius: 10,
            }}
          />
          <Text
            style={{ color: "#4472c4", fontSize: 18, fontFamily: "Lobster" }}
          >
            Teacher Name
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Rating</Text>
            <Text>4.5</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#4472c4",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              height: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>View Profile</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeacherCard;
