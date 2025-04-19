import { StyleSheet, TextInput, View, Text, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import PostlyIcon from "../../../components/UI/Icons/PostlyIcon";
import Button from "../../../components/UI/Button/Button";
import { useNavigation } from "@react-navigation/native";
import KeyboardModal from "../../../components/UI/Keyboar/KeyboardModal";
import SafeArea from "../../../components/UI/SafeArea/SafeArea";
import { ScreenContext } from "react-native-screens";
import {
  screenIconSizer,
  screenTextSizer,
} from "../../../util/GeneralFunctions";
import TextInputModal from "../../../components/UI/Input/TextInputModal";
import EmailInputModal from "../../../components/UI/Input/EmailInputModal";
import PasswordInputModal from "../../../components/UI/Input/PasswordInputModal";
import Paragraph from "../../../components/UI/Text/Paragraph";
import Divider from "../../../components/UI/Divider/Divider";
import { Light_Theme } from "../../../constants/General_Styles";

const SignIn = () => {
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
      <SafeArea style={styles.container}>
        <View style={styles.viewContainer}>
          <PostlyIcon
            imageContainerStyle={screenSize}
            imageSelfStyle={styles.imageSelf}
          />
          <Paragraph fontSize={textSize} style={styles.title}>
            Şimdi Kaydol!
          </Paragraph>
          <TextInputModal
            placeHolder="İsim"
            keyboardType="name"
            styles={[styles.inputStyle, { height: textSize + 20 }]}
          />
          <TextInputModal
            placeHolder="Soyisim"
            styles={[styles.inputStyle, { height: textSize + 20 }]}
          />
          <EmailInputModal
            placeHolder="Email"
            keyboardType="email-address"
            styles={[styles.inputStyle, { height: textSize + 20 }]}
          />
          <TextInputModal
            placeHolder="Doğum Tarihi"
            styles={[styles.inputStyle, { height: textSize + 20 }]}
          />
          <PasswordInputModal
            styles={[styles.inputStyle, { height: textSize + 20 }]}
            placeHolder="Şifre"
          />
          <PasswordInputModal
            styles={[styles.inputStyle, { height: textSize + 20 }]}
            placeHolder="Şifreni Onayla"
          />
          <Button incomingStyle={styles.buttonStyle}>
            <Paragraph fontSize={textSize - 6}>Kayıt Ol</Paragraph>
          </Button>
          <Divider styles={styles.divider} />
          <Text>Bir hesabın zaten var mı?</Text>
          <Button
            incomingStyle={styles.buttonStyle}
            onPressHandler={() => onNavigateHandler("Login")}
          >
            <Paragraph fontSize={textSize - 6}>Giriş Yap</Paragraph>
          </Button>
        </View>
      </SafeArea>
    </KeyboardModal>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  divider: {
    width: "80%",
    height: 5,
    backgroundColor: Light_Theme.primary,
    marginVertical: 8,
  },
});
