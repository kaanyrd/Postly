import { StyleSheet, Text, Button, View } from "react-native";
import React, { useContext } from "react";
import { LoginContext } from "../../../store/Context/LoginContextTemporarily";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const Messages = () => {
  const { setLoggedIn } = useContext(LoginContext);
  const bottomNavHeight = useBottomTabBarHeight();

  const logOut = () => {
    setLoggedIn(false);
  };
  return (
    <View>
      <Text>Welcome to Postly</Text>
      <Button title="Çıkış" onPress={logOut} />
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});
