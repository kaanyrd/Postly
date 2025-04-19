import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/UI/Button/Button";
import ForgetPasswordModal from "../../../components/Modals/ForgetPasswordModal";
import PostlyIcon from "../../../components/UI/Icons/PostlyIcon";
import {
  screenIconSizer,
  screenTextSizer,
} from "../../../util/GeneralFunctions";
import Paragraph from "../../../components/UI/Text/Paragraph";
import { ScreenContext } from "react-native-screens";
import SafeArea from "../../../components/UI/SafeArea/SafeArea";
import Divider from "../../../components/UI/Divider/Divider";
import { Light_Theme } from "../../../constants/General_Styles";

const ForgetPassword = () => {
  const navigation = useNavigation();
  let screenData = useContext(ScreenContext);
  let screenSize = screenIconSizer(screenData);
  let textSize = screenTextSizer(screenData);
  const [formValid, setFormValid] = useState(false);
  const [forgetPasswordModal, setForgetPasswordModal] = useState(false);

  const cancelProcess = (incomingScreenName) => {
    navigation.replace(incomingScreenName);
  };

  const onOpenModalHandler = () => {
    setForgetPasswordModal((prevState) => !prevState);
  };

  return (
    <SafeArea style={styles.container}>
      <View style={styles.viewContainer}>
        <PostlyIcon
          imageContainerStyle={screenSize}
          imageSelfStyle={styles.imageSelf}
        />
        <Paragraph fontSize={textSize} style={styles.title}>
          Postly'de şifreni mi unuttun?
        </Paragraph>
        <Paragraph fontSize={textSize - 8} style={styles.title}>
          Şifreni kurtarmak için devam et.
        </Paragraph>

        <Button
          incomingStyle={styles.buttonStyle}
          onPressHandler={onOpenModalHandler}
        >
          <Paragraph fontSize={textSize}>Şifremi Unuttum</Paragraph>
        </Button>
        <Divider styles={styles.divider} />
        <Paragraph style={styles.orText} fontSize={textSize}>
          Hayır şifremi hatırlıyorum
        </Paragraph>
        <Button
          incomingStyle={styles.buttonStyle}
          onPressHandler={() => cancelProcess("Login")}
        >
          <Paragraph fontSize={textSize}>İptal Et</Paragraph>
        </Button>
        {forgetPasswordModal && (
          <ForgetPasswordModal
            isVisible={forgetPasswordModal}
            modalHandler={onOpenModalHandler}
          />
        )}
      </View>
    </SafeArea>
  );
};

export default ForgetPassword;

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
  title: {
    marginVertical: 6,
  },
  buttonStyle: {
    borderColor: "black",
    borderWidth: 2,
    width: "auto",
    padding: 8,
    textAlign: "center",
    marginVertical: 8,
  },
  orText: {
    marginVertical: 4,
  },
  divider: {
    width: "80%",
    height: 5,
    backgroundColor: Light_Theme.primary,
    marginVertical: 8,
  },
});
