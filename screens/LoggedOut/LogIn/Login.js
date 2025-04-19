import { StyleSheet, Text } from "react-native";
import React, { useContext, useState } from "react";
import Button from "../../../components/UI/Button/Button";
import { useNavigation } from "@react-navigation/native";
import PostlyIcon from "../../../components/UI/Icons/PostlyIcon";
import {
  screenIconSizer,
  screenTextSizer,
} from "../../../util/GeneralFunctions";
import { ScreenContext } from "../../../store/Context/ScreenContext";
import SafeArea from "../../../components/UI/SafeArea/SafeArea";
import Paragraph from "../../../components/UI/Text/Paragraph";
import Divider from "../../../components/UI/Divider/Divider";
import { Light_Theme } from "../../../constants/General_Styles";
import KeyboardModal from "../../../components/UI/Keyboar/KeyboardModal";
import EmailInputModal from "../../../components/UI/Input/EmailInputModal";
import PasswordInputModal from "../../../components/UI/Input/PasswordInputModal";

const Login = () => {
  const navigation = useNavigation();
  let screenData = useContext(ScreenContext);
  let screenSize = screenIconSizer(screenData);
  let textSize = screenTextSizer(screenData);
  const [formValid, setFormValid] = useState(false);

  const onNavigateHandler = (incomingScreenName) => {
    navigation.replace(incomingScreenName);
  };

  return (
    <KeyboardModal>
      <SafeArea style={styles.viewContainer}>
        <PostlyIcon
          imageContainerStyle={screenSize}
          imageSelfStyle={styles.imageSelf}
        />
        <Paragraph fontSize={textSize} style={styles.title}>
          Düşüncelerinin dünyayla buluştuğu yer
        </Paragraph>
        <EmailInputModal
          placeHolder="Email"
          styles={[styles.inputStyle, { height: textSize + 20 }]}
        />
        {formValid && <Text>Error hint</Text>}
        <PasswordInputModal
          placeHolder="Şifre"
          styles={[styles.inputStyle, { height: textSize + 20 }]}
        />
        {formValid && <Text>Error hint</Text>}
        <Button incomingStyle={styles.buttonStyle}>
          <Paragraph fontSize={textSize}>Giriş Yap</Paragraph>
        </Button>
        <Button
          incomingStyle={styles.buttonStyle}
          onPressHandler={() => onNavigateHandler("ForgetPassword")}
        >
          <Paragraph fontSize={textSize}>Şiremi Unuttum</Paragraph>
        </Button>
        <Divider styles={styles.divider} />
        <Paragraph fontSize={textSize - 6} style={styles.orText}>
          Bir hesabın yok mu?
        </Paragraph>
        <Button
          incomingStyle={styles.buttonStyle}
          onPressHandler={() => onNavigateHandler("SignIn")}
        >
          <Paragraph fontSize={textSize}>Kayıt Ol</Paragraph>
        </Button>
      </SafeArea>
    </KeyboardModal>
  );
};

export default Login;

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
  inputStyle: {
    borderWidth: 1,
    borderColor: "gray",
    width: "70%",
    marginVertical: 8,
    borderRadius: 5,
    maxWidth: 400,
    paddingInlineStart: 4,
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
