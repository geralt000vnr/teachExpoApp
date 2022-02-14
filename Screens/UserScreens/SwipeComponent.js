import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import Tags from "react-native-tags";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { Rating } from "react-native-ratings";

const SwipeComponent = () => {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const fadeAnim = useRef(new Animated.Value(10)).current;

  const fadeIn = (val) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: val,
      //   duration: 1000,
      //   useNativeDriver: true,
    }).start();
  };

  const fadeOut = (val) => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: val,
      //   duration: 1000,
      //   useNativeDriver,
    }).start();
  };

  const handleSwipeRight = (state) => {
    fadeIn(state.moveX);
    console.log(state.vx);
  };
  const handleSwipeLeft = (state) => {
    fadeOut(state.moveX);
  };
  return (
    <View>
      <GestureRecognizer
        onSwipeRight={(state) => handleSwipeRight(state)}
        onSwipeLeft={(state) => handleSwipeLeft(state)}
        config={config}
      >
        <Animated.View
          style={{
            width: Dimensions.get("window").width - 20,
            paddingVertical: 20,
            justifyContent: "center",
            marginLeft: fadeAnim,
            // alignSelf: "center",
            backgroundColor: "#bbb",
            marginVertical: 10,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Rating
            type="star"
            ratingCount={5}
            ratingColor="#e44d3a"
            ratingBackgroundColor="#e44d3a"
            tintColor="#bbb"
            imageSize={40}
            minValue={1}
            startingValue={4}
            readonly
          />
          <Text style={{ color: "#e44d3a", textAlign: "center" }}>
            50 Reviews
          </Text>
          <View>
            <Image
              source={require("../../assets/profileImg1.jpg")}
              style={{
                height: 250,
                width: 250,
                borderRadius: 150,
                alignSelf: "center",
                marginVertical: 10,
              }}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 50,
                right: 50,
                backgroundColor: "#aaa",
                padding: 8,
                borderRadius: 50,
              }}
            >
              <FontAwesome5Icon
                name="star"
                solid={false}
                size={25}
                color="#e44d3a"
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "#e44d3a",
              fontSize: 22,
              fontWeight: "bold",
              fontFamily: "Lobster",
              textAlign: "center",
            }}
          >
            User Name
          </Text>
          <View
            style={{
              backgroundColor: "#e44d3a",
              marginHorizontal: 10,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              height: 30,
              width: "40%",
              borderRadius: 50,
              flexDirection: "row",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <FontAwesome5Icon name="map-marker-alt" color={"#fff"} />
            <Text
              style={{
                color: "#fff",
                textTransform: "uppercase",
                marginHorizontal: 5,
              }}
            >
              10 km Away
            </Text>
          </View>
          <Tags
            initialText=""
            readonly={true}
            textInputProps={{
              placeholder: "Topics...",
            }}
            initialTags={[
              "Thermodynomics",
              "Electrochemstry",
              "Electrochemstry",
              "Thermodynomics",
              "Electrochemstry",
            ]}
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
            renderTag={({
              tag,
              index,
              onPress,
              deleteTagOnPress,
              readonly,
            }) => (
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
        </Animated.View>
      </GestureRecognizer>
    </View>
  );
};

export default SwipeComponent;
