import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { IonIcons } from "react-native-vector-icons/Ionicons";
import { Rating } from "react-native-ratings";
import { useFonts } from "expo-font";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const ProfileCard = ({ navigation }) => {
  const [loaded] = useFonts({
    OpenSansCondensedLightItalic: require("../../assets/fonts/Open_Sans_Condensed/OpenSansCondensed-LightItalic.ttf"),
    OpenSansCondensedBold: require("../../assets/fonts/Open_Sans_Condensed/OpenSansCondensed-Bold.ttf"),
  });

  const Tab = createMaterialTopTabNavigator();

  const AboutSection = () => {
    return (
      <>
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              backgroundColor: "#e44d3a",
              padding: 5,
              borderRadius: 10,
              width: "23%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "OpenSansCondensedBold",
                fontSize: 15,
              }}
            >
              MBA, B.Tech
            </Text>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "OpenSansCondensedLightItalic",
              }}
            >
              Qualifications
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#e44d3a",
              padding: 5,
              borderRadius: 10,
              width: "23%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "OpenSansCondensedBold",
              }}
            >
              30 Min
            </Text>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "OpenSansCondensedLightItalic",
              }}
            >
              Resposne Time
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#e44d3a",
              padding: 5,
              borderRadius: 10,
              width: "23%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "OpenSansCondensedBold",
              }}
            >
              90 Hours
            </Text>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "OpenSansCondensedLightItalic",
              }}
            >
              Tought
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#e44d3a",
              padding: 5,
              borderRadius: 10,
              width: "23%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "OpenSansCondensedBold",
              }}
            >
              5 Miles
            </Text>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "OpenSansCondensedLightItalic",
              }}
            >
              Travels
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#4472c4",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
          <Text style={{ color: "#fff" }}>
            It has survived not only five centuries, but also the leap into
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </Text>
        </View>
      </>
    );
  };

  const Price = () => {
    return (
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              width: "33%",
              height: 50,
              backgroundColor: "#fffefe",
              fontSize: 15,
              textAlign: "center",
              padding: 5,
              justifyContent: "center",
            }}
          >
            Subject
          </Text>
          <Text
            style={{
              width: "33%",
              height: 50,
              backgroundColor: "#fffefe",
              fontSize: 15,
              textAlign: "center",
              padding: 5,
              justifyContent: "center",
            }}
          >
            Level Of Education
          </Text>
          <Text
            style={{
              width: "33%",
              height: 50,
              backgroundColor: "#fffefe",
              fontSize: 15,
              textAlign: "center",
              padding: 5,
              justifyContent: "center",
            }}
          >
            Price Per Hours in &#163;
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#4472c4",
            borderRadius: 20,
            marginVertical: 5,
            marginHorizontal: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              width: "33%",
              textAlign: "center",
              fontSize: 15,
              color: "#fff",
              marginVertical: 10,
            }}
          >
            Physiotherapy
          </Text>
          <Text
            style={{
              width: "33%",
              textAlign: "center",
              fontSize: 15,
              color: "#fff",
              marginVertical: 10,
            }}
          >
            BCA
          </Text>
          <Text
            style={{
              width: "33%",
              textAlign: "center",
              fontSize: 15,
              color: "#fff",
              marginVertical: 10,
            }}
          >
            10
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#4472c4",
            borderRadius: 20,
            marginVertical: 5,
            marginHorizontal: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              width: "33%",
              textAlign: "center",
              fontSize: 15,
              color: "#fff",
              marginVertical: 10,
            }}
          >
            Mathematics
          </Text>
          <Text
            style={{
              width: "33%",
              textAlign: "center",
              fontSize: 15,
              color: "#fff",
              marginVertical: 10,
            }}
          >
            B.Com
          </Text>
          <Text
            style={{
              width: "33%",
              textAlign: "center",
              fontSize: 15,
              color: "#fff",
              marginVertical: 10,
            }}
          >
            15
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#4472c4",
            borderRadius: 20,
            marginVertical: 5,
            marginHorizontal: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              width: "33%",
              textAlign: "center",
              fontSize: 15,
              color: "#fff",
              marginVertical: 10,
            }}
          >
            Environmental Science
          </Text>
          <Text
            style={{
              width: "33%",
              textAlign: "center",
              fontSize: 15,
              color: "#fff",
              marginVertical: 10,
            }}
          >
            BCA
          </Text>
          <Text
            style={{
              width: "33%",
              textAlign: "center",
              fontSize: 15,
              color: "#fff",
              marginVertical: 10,
            }}
          >
            10
          </Text>
        </View>
      </View>
      //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //     <Text>About!</Text>
      //   </View>
    );
  };

  const Message = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>About!</Text>
      </View>
    );
  };
  const Stats = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>About!</Text>
      </View>
    );
  };

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Image
        source={require("../../assets/profileImg.jpeg")}
        style={{
          height: 150,
          width: 150,
          borderRadius: 100,
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          color: "#e44d3a",
          fontSize: 22,
          fontWeight: "bold",
          fontFamily: "Lobster",
          textAlign: "center",
        }}
      >
        Sam Kumari
      </Text>
      <Text
        style={{
          color: "#e44d3a",
          fontWeight: "bold",
          fontFamily: "OpenSansCondensedBold",
          textAlign: "center",
        }}
      >
        123, Jaipur, Rajasthan
      </Text>
      <Rating
        type="star"
        ratingCount={5}
        ratingColor="#e44d3a"
        ratingBackgroundColor="#e44d3a"
        tintColor="#eee"
        imageSize={30}
        minValue={1}
        startingValue={4}
        readonly
      />
      <Tab.Navigator
        initialRouteName="About"
        screenOptions={{
          tabBarContentContainerStyle: {
            backgroundColor: "#e44d3a",
          },
          tabBarShowIcon: true,
          tabBarLabelStyle: { color: "#fff" },
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const routeName = ["About", "Price", "Message", "State"];
            // navigation.getState().routes[1].state.routeNames;
            // let IconComponent = FontAwesome5Icon;
            let iconName;
            if (routeName[0] == "About") {
              console.log("this is about", routeName[0]);
              iconName = "user";
            } else if (routeName[1] == "Price") {
              iconName = "comment-dots";
              console.log("this is price", routeName[1]);
            } else if (routeName[2] == "Message") {
              iconName = "pound-sign";
              console.log("this is message", routeName[2]);
            } else {
              iconName = "chart-bar";
              console.log("stats", routeName[3]);
            }
            return (
              <View
                style={{
                  backgroundColor: "#9d301f",
                  height: 40,
                  width: 40,
                  borderRadius: 25,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5Icon
                  name={iconName}
                  size={20}
                  solid={focused}
                  color="#fff"
                />
              </View>
            );
          },
        }}
      >
        <Tab.Screen name="About" component={AboutSection} />
        <Tab.Screen name="Price" component={Price} />
        <Tab.Screen name="Message" component={Message} />
        <Tab.Screen name="Stats" component={Stats} />
      </Tab.Navigator>
      {/* //   <View style={{ margin: 10 }}>
    //     <FontAwesome5Icon
    //       name="arrow-left"
    //       size={28}
    //       onPress={() => navigation.goBack(null)}
    //     />
    //     <ScrollView>
    //       
    //       <Tab.Navigator>
    //         <Tab.Screen name="About" component={About} />
    //         <Tab.Screen name="Price" component={Price} />
    //         <Tab.Screen name="Message" component={Message} />
    //         <Tab.Screen name="Stats" component={Stats} />
    //       </Tab.Navigator>
    //       <View
    //         style={{
    //           width: "100%",
    //           backgroundColor: "#e44d3a",
    //           height: 100,
    //           flexDirection: "row",
    //           justifyContent: "space-evenly",
    //           alignItems: "center",
    //         }}
    //       >
    //         <View style={{ justifyContent: "center", alignItems: "center" }}>
    //           <View
    //             style={{
    //               backgroundColor: "#9d301f",
    //               height: 50,
    //               width: 50,
    //               borderRadius: 25,
    //               justifyContent: "center",
    //               alignItems: "center",
    //             }}
    //           >
    //             <FontAwesome5Icon
    //               name="user"
    //               size={25}
    //               solid={true}
    //               color="#fff"
    //             />
    //           </View>
    //           <Text style={{ color: "#fff", fontSize: 10 }}>About</Text>
    //         </View>
    //         <View style={{ justifyContent: "center", alignItems: "center" }}>
    //           <View
    //             style={{
    //               backgroundColor: "#9d301f",
    //               height: 50,
    //               width: 50,
    //               borderRadius: 25,
    //               justifyContent: "center",
    //               alignItems: "center",
    //             }}
    //           >
    //             <FontAwesome5Icon
    //               name="pound-sign"
    //               size={25}
    //               solid={true}
    //               color="#fff"
    //             />
    //           </View>
    //           <Text style={{ color: "#fff", fontSize: 10 }}>Price</Text>
    //         </View>
    //         <View style={{ justifyContent: "center", alignItems: "center" }}>
    //           <View
    //             style={{
    //               backgroundColor: "#9d301f",
    //               height: 50,
    //               width: 50,
    //               borderRadius: 25,
    //               justifyContent: "center",
    //               alignItems: "center",
    //             }}
    //           >
    //             <FontAwesome5Icon
    //               name="comment-dots"
    //               size={25}
    //               solid={true}
    //               color="#fff"
    //             />
    //           </View>
    //           <Text style={{ color: "#fff", fontSize: 10 }}>Message</Text>
    //         </View>
    //         <View style={{ justifyContent: "center", alignItems: "center" }}>
    //           <View
    //             style={{
    //               backgroundColor: "#9d301f",
    //               height: 50,
    //               width: 50,
    //               borderRadius: 25,
    //               justifyContent: "center",
    //               alignItems: "center",
    //             }}
    //           >
    //             <FontAwesome5Icon
    //               name="chart-bar"
    //               size={25}
    //               solid={true}
    //               color="#fff"
    //             />
    //           </View>
    //           <Text style={{ color: "#fff", fontSize: 10 }}>Stats</Text>
    //         </View>
    //       </View>
    //     </ScrollView>
    //   </View> */}
    </SafeAreaView>
  );
};

export default ProfileCard;
