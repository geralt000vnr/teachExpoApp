import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import React from "react";

const CourseCard = () => {
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
            source={require("../../assets/profileImg.jpeg")}
            style={{
              height: 200,
              width: "100%",
              borderRadius: 10,
            }}
          />

          <Text
            style={{ color: "#e44d3a", fontSize: 18, fontFamily: "Lobster" }}
          >
            Course Name
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>No. of Chapter</Text>
            <Text>5</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#e44d3a",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              height: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>Check Details</Text>
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
            source={require("../../assets/profileImg.jpeg")}
            style={{
              height: 200,
              width: "100%",
              borderRadius: 10,
            }}
          />

          <Text
            style={{ color: "#e44d3a", fontSize: 18, fontFamily: "Lobster" }}
          >
            Course Name
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>No. of Chapter</Text>
            <Text>5</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#e44d3a",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              height: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>Check Details</Text>
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
            source={require("../../assets/profileImg.jpeg")}
            style={{
              height: 200,
              width: "100%",
              borderRadius: 10,
            }}
          />
          <Text
            style={{ color: "#e44d3a", fontSize: 18, fontFamily: "Lobster" }}
          >
            Course Name
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>No. of Chapter</Text>
            <Text>4</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#e44d3a",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              height: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>Check Details</Text>
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
            source={require("../../assets/profileImg.jpeg")}
            style={{
              height: 200,
              width: "100%",
              borderRadius: 10,
            }}
          />
          <Text
            style={{ color: "#e44d3a", fontSize: 18, fontFamily: "Lobster" }}
          >
            Course Name
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>No. of Chapter</Text>
            <Text>6</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#e44d3a",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              height: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>Check Details</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CourseCard;
