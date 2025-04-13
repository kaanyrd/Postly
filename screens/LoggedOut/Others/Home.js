import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../../../components/UI/Button/Button";
import { useNavigation } from "@react-navigation/native";
import PostlyIcon from "../../../components/UI/Icons/PostlyIcon";

const Home = () => {
  const navigation = useNavigation();

  const navigateToLogin = (incomingScreenName) => {
    navigation.replace(incomingScreenName);
  };

  return (
    <View style={styles.container}>
      <PostlyIcon
        imageContainerStyle={styles.imageContainer}
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
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "green",
  },
  imageContainer: {
    width: 80,
    height: 80,
    alignSelf: "center",
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
