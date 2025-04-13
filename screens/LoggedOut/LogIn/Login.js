import { StyleSheet, Text, View, Image, Input, TextInput } from "react-native";
import React from "react";
import Button from "../../../components/UI/Button/Button";
import { useNavigation } from "@react-navigation/native";
import PostlyIcon from "../../../components/UI/Icons/PostlyIcon";

const Login = () => {
  const navigation = useNavigation();

  const onNavigateHandler = (incomingScreenName) => {
    navigation.replace(incomingScreenName);
  };

  return (
    <View>
      <PostlyIcon
        imageContainerStyle={styles.imageContainer}
        imageSelfStyle={styles.imageSelf}
      />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Şifre" />
      <Button>Giriş Yap</Button>
      <Button onPressHandler={() => onNavigateHandler("ForgetPassword")}>
        Şiremi Unuttum
      </Button>
      <Text>Bir hesabın yok mu?</Text>
      <Button onPressHandler={() => onNavigateHandler("SignIn")}>
        Kayıt Ol
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  imageContainer: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  imageSelf: {
    width: "100%",
    height: "100%",
  },
});
