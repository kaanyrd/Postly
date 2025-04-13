import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/UI/Button/Button";
import ForgetPasswordModal from "../../../components/Modals/ForgetPasswordModal";
import PostlyIcon from "../../../components/UI/Icons/PostlyIcon";

const ForgetPassword = () => {
  const navigation = useNavigation();
  const [forgetPasswordModal, setForgetPasswordModal] = useState(false);

  const cancelProcess = (incomingScreenName) => {
    navigation.replace(incomingScreenName);
  };

  const onOpenModalHandler = () => {
    setForgetPasswordModal((prevState) => !prevState);
  };

  return (
    <View>
      <PostlyIcon
        imageContainerStyle={styles.imageContainer}
        imageSelfStyle={styles.imageSelf}
      />
      <Text>Postly'de şifreni mi unuttun.</Text>
      <Text>Şifreni kurtarmak için devam et.</Text>
      <Button onPressHandler={() => cancelProcess("Login")}>İptal Et</Button>
      <Button onPressHandler={onOpenModalHandler}>Şifremi Unuttum</Button>
      <Text>Hayır şifremi hatırlıyorum</Text>
      <ForgetPasswordModal
        isVisible={forgetPasswordModal}
        modalHandler={onOpenModalHandler}
      />
    </View>
  );
};

export default ForgetPassword;

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
