import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Button from "../../../components/UI/Button/Button";
import { useNavigation } from "@react-navigation/native";
import PostlyIcon from "../../../components/UI/Icons/PostlyIcon";
import SafeArea from "../../../components/UI/SafeArea/SafeArea";
import { ScreenContext } from "../../../store/Context/ScreenContext";
import { screenIconSizer } from "../../../util/GeneralFunctions";

const Home = () => {
  const navigation = useNavigation();
  let screenData = useContext(ScreenContext);
  let screenSize = screenIconSizer(screenData);

  const navigateToLogin = (incomingScreenName) => {
    navigation.replace(incomingScreenName);
  };

  return (
    <SafeArea style={styles.container}>
      <View style={styles.viewContainer}>
        <PostlyIcon
          imageContainerStyle={screenSize}
          imageSelfStyle={styles.imageSelf}
        />
        <Text>Postly</Text>
        <Text>Kimin ne düşündüğünü ilk sen öğren</Text>
        <Text>Postly'e Giriş Yap</Text>
        <Button
          incomingStyle={styles.buttonStyle}
          onPressHandler={() => navigateToLogin("SignIn")}
        >
          Kayıt Ol
        </Button>
        <Text>veya</Text>
        <Text>Bir hesabın zaten var mı?</Text>
        <Button
          incomingStyle={styles.buttonStyle}
          onPressHandler={() => navigateToLogin("Login")}
        >
          Giriş Yap
        </Button>
      </View>
    </SafeArea>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageSelf: {
    width: "100%",
    height: "100%",
  },
  buttonStyle: {
    borderColor: "black",
    borderWidth: 2,
    width: 150,
    padding: 8,
    textAlign: "center",
  },
});
