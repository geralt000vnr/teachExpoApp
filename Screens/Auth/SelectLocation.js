import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";

const SelectLocation = ({ navigation, onPress }) => {
  const [loading, setLoading] = useState(false);
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Click The Button Below To Get Location",
  );
  const handleLocation = () => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  };

  const GetCurrentLocation = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false },
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        console.log(item);
        let address = `${item.name},  ${item.postalCode}, ${item.city}`;

        setDisplayCurrentAddress(address);
      }
    }
    setLoading(false);
  };

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Service not enabled",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false },
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  return (
    <View
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
        {displayCurrentAddress === "Click The Button Below To Get Location"
          ? "Where Would You Like to be Taught?"
          : "Thanks For Giving Your Location"}
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Text style={styles.text}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            displayCurrentAddress
          )}
        </Text>
        <Button
          title="Get Current Location"
          onPress={handleLocation}
          color={"#dd4830"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070707",
    alignItems: "center",
    paddingTop: 130,
  },
  contentContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FD0139",
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    color: "#000",
  },
});

export default SelectLocation;
