import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/Auth/LoginScreen";
import Registeration from "../Screens/Auth/Registeration";
import HomeScreen from "../Screens/UserScreens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileCard from "../Screens/UserScreens/ProfileCard";
import SignUpScreen from "../Screens/Auth/SignUpScreen";
import Otp from "../Screens/Auth/Otp";
import SIgnUpDetails from "../Screens/Auth/SIgnUpDetails";
import CustomDrawer from "./CustomDrawer";
import MessageScreen from "../Screens/UserScreens/MessageScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#0099dc",
        drawerItemStyle: {
          borderRadius: 50,
        },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="myProfile"
        options={{ title: " Profile" }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Message"
        options={{ title: "My Messages" }}
        component={MessageScreen}
      />
    </Drawer.Navigator>
  );
};

const UserRoutes = () => {
  const currentUser = true;
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {!currentUser ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="SignUpDetails" component={SIgnUpDetails} />
            <Stack.Screen name="Registeration" component={SignUpScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Drawer"
          >
            <Stack.Screen name="Drawer" component={MyDrawer} />
            <Stack.Screen name="ProfileCard" component={ProfileCard} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </View>
  );
};

export default UserRoutes;
