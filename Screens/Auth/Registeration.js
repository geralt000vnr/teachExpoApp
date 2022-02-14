import { useFonts } from "expo-font";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import CreatePassword from "./CreatePassword";
import EmailPage from "./EmailPage";
import MobileNumber from "./MobileNumberPage";
import Otp from "./Otp";
import CreateName from "./CreateName";
import SelectMode from "./SelectMode";
import SelectTags from "./SelectTags";
import SelectLocation from "./SelectLocation";
import BankDetails from "./BankDetails";

const Registeration = ({ navigation }) => {
  const [registerationValues, setRegisterationValues] = useState({
    PhoneNumber: false,
    Otp: false,
    Email: false,
    CreatePassword: false,
    FullName: false,
    SelectMode: false,
    SelectTag: false,
    SelectLocation: false,
    BankDetails: false,
  });
  return (
    <SafeAreaView
      style={{
        marginHorizontal: 10,
        flex: 1,
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight + 30 : 10,
      }}
    >
      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => navigation.goBack(null)}
      >
        <Image source={require("../../assets/icon/Arrow.png")} />
      </TouchableOpacity>
      {!registerationValues.PhoneNumber ? (
        <MobileNumber
          onPress={() =>
            setRegisterationValues({
              ...registerationValues,
              PhoneNumber: true,
            })
          }
        />
      ) : (
        <>
          {!registerationValues.Otp ? (
            <Otp
              onPress={() =>
                setRegisterationValues({ ...registerationValues, Otp: true })
              }
            />
          ) : (
            <>
              {!registerationValues.Email ? (
                <EmailPage
                  onPress={() =>
                    setRegisterationValues({
                      ...registerationValues,
                      Email: true,
                    })
                  }
                />
              ) : (
                <>
                  {!registerationValues.CreatePassword ? (
                    <CreatePassword
                      onPress={() =>
                        setRegisterationValues({
                          ...registerationValues,
                          CreatePassword: true,
                        })
                      }
                    />
                  ) : (
                    <>
                      {!registerationValues.FullName ? (
                        <CreateName
                          onPress={() =>
                            setRegisterationValues({
                              ...registerationValues,
                              FullName: true,
                            })
                          }
                        />
                      ) : (
                        <>
                          {!registerationValues.SelectMode ? (
                            <SelectMode
                              onPress={() =>
                                setRegisterationValues({
                                  ...registerationValues,
                                  SelectMode: true,
                                })
                              }
                            />
                          ) : (
                            <>
                              {!registerationValues.SelectTag ? (
                                <SelectTags
                                  onPress={() =>
                                    setRegisterationValues({
                                      ...registerationValues,
                                      SelectTag: true,
                                    })
                                  }
                                />
                              ) : (
                                <>
                                  {!registerationValues.SelectLocation ||
                                  registerationValues.SelectLocation ===
                                    "Click The Button Below To Get Location" ? (
                                    <SelectLocation
                                      onPress={() =>
                                        setRegisterationValues({
                                          ...registerationValues,
                                          SelectLocation: true,
                                        })
                                      }
                                    />
                                  ) : (
                                    <BankDetails
                                      onPress={
                                        (() =>
                                          setRegisterationValues({
                                            ...registerationValues,
                                            BankDetails: true,
                                          }),
                                        navigation.navigate("Login"))
                                      }
                                    />
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default Registeration;
