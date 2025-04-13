import { StyleSheet, TextInput, View, Text } from "react-native";
import React from "react";
import PostlyIcon from "../../../components/UI/Icons/PostlyIcon";
import Button from "../../../components/UI/Button/Button";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
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
      <TextInput placeholder="İsim" />
      <TextInput placeholder="Soyisim" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Doğum Tarihi" />
      <Button>Kayıt Ol</Button>
      <Text>Bir hesabın zaten var mı?</Text>
      <Button onPressHandler={() => onNavigateHandler("Login")}>
        Giriş Yap
      </Button>
    </View>
  );
};

export default SignIn;

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
