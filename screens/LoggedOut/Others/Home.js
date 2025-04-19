import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Button from "../../../components/UI/Button/Button";
import { useNavigation } from "@react-navigation/native";
import PostlyIcon from "../../../components/UI/Icons/PostlyIcon";
import SafeArea from "../../../components/UI/SafeArea/SafeArea";
import { ScreenContext } from "../../../store/Context/ScreenContext";
import {
  screenIconSizer,
  screenTextSizer,
} from "../../../util/GeneralFunctions";
import Paragraph from "../../../components/UI/Text/Paragraph";
import Divider from "../../../components/UI/Divider/Divider";
import { Light_Theme } from "../../../constants/General_Styles";

const Home = () => {
  const navigation = useNavigation();
  let screenData = useContext(ScreenContext);
  let screenSize = screenIconSizer(screenData);
  let textSize = screenTextSizer(screenData);

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
        <Paragraph
          fontSize={textSize + 8}
          fontWeight="bold"
          style={styles.title}
        >
          Postly
        </Paragraph>
        <Paragraph fontSize={textSize} style={styles.title}>
          Kimin ne düşündüğünü ilk sen öğren
        </Paragraph>
        <Paragraph fontSize={textSize - 2} style={styles.motto}>
          Postly'e Giriş Yap
        </Paragraph>
        <Button
          incomingStyle={styles.buttonStyle}
          onPressHandler={() => navigateToLogin("SignIn")}
        >
          <Paragraph fontSize={textSize}>Kayıt Ol</Paragraph>
        </Button>
        <Paragraph fontSize={textSize - 6} style={styles.orText}>
          veya
        </Paragraph>
        <Divider styles={styles.divider} />
        <Paragraph fontSize={textSize - 2} style={styles.alreadyText}>
          Bir hesabın zaten var mı?
        </Paragraph>
        <Button
          incomingStyle={styles.buttonStyle}
          onPressHandler={() => navigateToLogin("Login")}
        >
          <Paragraph fontSize={textSize}>Giriş Yap</Paragraph>
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
  title: {
    marginVertical: 6,
  },
  motto: {
    marginBottom: 18,
  },
  orText: {
    marginVertical: 4,
  },
  alreadyText: {
    marginVertical: 8,
  },
  divider: {
    width: "80%",
    height: 5,
    backgroundColor: Light_Theme.primary,
  },
});
