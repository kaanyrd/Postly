import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { LoginContext } from "../../../store/Context/LoginContextTemporarily";
import SafeArea from "../../../components/UI/SafeArea/SafeArea";

const Time = () => {
  const { setLoggedIn } = useContext(LoginContext);

  const logOut = () => {
    setLoggedIn(false);
  };

  return (
    <SafeArea>
      <View stlye={styles.container}>
        <Text>Welcome to Postly</Text>
        <Button title="Çıkış" onPress={logOut} />
      </View>
    </SafeArea>
  );
};

export default Time;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
