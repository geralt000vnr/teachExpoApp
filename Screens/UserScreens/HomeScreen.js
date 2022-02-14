import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { Rating } from "react-native-ratings";
import { useFonts } from "expo-font";
import Tags from "react-native-tags";
import SwipeComponent from "./SwipeComponent";
import TeacherCard from "./TeacherCard";
import CourseCard from "./CourseCard";
import Banner from "./Banner";
import MyCourseCard from "./MyCourseCard";

const HomeScreen = ({ navigation }) => {
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };
  const [loaded] = useFonts({
    Lobster: require("../../assets/fonts/Lobster/Lobster-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          margin: 10,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <FontAwesome5Icon
          name="bars"
          size={28}
          onPress={() => navigation.openDrawer()}
        />
        <FontAwesome5Icon
          name="paper-plane"
          size={28}
          onPress={() => navigation.navigate("Message")}
        />
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#ddf",
            borderRadius: 10,
            marginVertical: 10,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{ color: "#e44d3a", fontSize: 18, marginHorizontal: 10 }}
          >
            Continue Studing...
          </Text>
          <MyCourseCard />
        </View>

        <Banner />
        <Text style={{ color: "#4472c4", fontSize: 18, marginHorizontal: 10 }}>
          List Of Teachers
        </Text>
        <TeacherCard />
        <Text style={{ color: "#e44d3a", fontSize: 18, marginHorizontal: 10 }}>
          List Of Courses
        </Text>
        <CourseCard />
        <View>
          <SwipeComponent />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProfileCard")}
          style={{
            backgroundColor: "#e44d3a",
            marginHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
            height: 40,
            borderRadius: 50,
          }}
        >
          <Text style={{ color: "#fff", textTransform: "uppercase" }}>
            View Profile
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
