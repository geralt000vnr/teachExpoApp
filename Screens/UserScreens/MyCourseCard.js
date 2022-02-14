import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const MyCourseCard = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginVertical: 10,
          padding: 10,
        }}
      >
        <Image
          source={require("../../assets/profileImg1.jpg")}
          style={{ height: 100, width: 100, borderRadius: 10 }}
        />
        <View
          style={{
            marginHorizontal: 10,
            justifyContent: "space-between",
            maxWidth: "70%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{ color: "#e44d3a", fontSize: 18, fontFamily: "Lobster" }}
            >
              Course Name
            </Text>
            <Text style={{ color: "#4472c4", fontSize: 15, marginLeft: 5 }}>
              by Author Name
            </Text>
          </View>
          <Text>About text comes here Lorem ipsum About Text Comes here</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Progress.Bar
              progress={0.9}
              width={200}
              //   height={20}
              borderRadius={2}
            />
            <FontAwesome5Icon
              name="arrow-right"
              size={20}
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginVertical: 10,
          padding: 10,
        }}
      >
        <Image
          source={require("../../assets/profileImg1.jpg")}
          style={{ height: 100, width: 100, borderRadius: 10 }}
        />
        <View
          style={{
            marginHorizontal: 10,
            justifyContent: "space-between",
            maxWidth: "70%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{ color: "#e44d3a", fontSize: 18, fontFamily: "Lobster" }}
            >
              Course Name
            </Text>
            <Text style={{ color: "#4472c4", fontSize: 15, marginLeft: 5 }}>
              by Author Name
            </Text>
          </View>
          <Text>About text comes here Lorem ipsum About Text Comes here</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Progress.Bar
              progress={0.3}
              width={200}
              //   height={20}
              borderRadius={2}
            />
            <FontAwesome5Icon
              name="arrow-right"
              size={20}
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginVertical: 10,
          padding: 10,
        }}
      >
        <Image
          source={require("../../assets/profileImg1.jpg")}
          style={{ height: 100, width: 100, borderRadius: 10 }}
        />
        <View
          style={{
            marginHorizontal: 10,
            justifyContent: "space-between",
            maxWidth: "70%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{ color: "#e44d3a", fontSize: 18, fontFamily: "Lobster" }}
            >
              Course Name
            </Text>
            <Text style={{ color: "#4472c4", fontSize: 15, marginLeft: 5 }}>
              by Author Name
            </Text>
          </View>
          <Text>About text comes here Lorem ipsum About Text Comes here</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Progress.Bar
              progress={0.5}
              width={200}
              //   height={20}
              borderRadius={2}
            />
            <FontAwesome5Icon
              name="arrow-right"
              size={20}
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyCourseCard;
