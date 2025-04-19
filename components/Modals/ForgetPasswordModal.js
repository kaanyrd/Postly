import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext } from "react";
import Button from "../UI/Button/Button";
import KeyboardModal from "../UI/Keyboar/KeyboardModal";
import SafeArea from "../UI/SafeArea/SafeArea";
import PostlyIcon from "../UI/Icons/PostlyIcon";
import { screenIconSizer, screenTextSizer } from "../../util/GeneralFunctions";
import { ScreenContext } from "../../store/Context/ScreenContext";
import Paragraph from "../UI/Text/Paragraph";
import EmailInputModal from "../UI/Input/EmailInputModal";
import PasswordInputModal from "../UI/Input/PasswordInputModal";

const ForgetPasswordModal = ({ isVisible, modalHandler }) => {
  let screenData = useContext(ScreenContext);
  let screenSize = screenIconSizer(screenData);
  let textSize = screenTextSizer(screenData);

  return (
    <Modal visible={isVisible} animationType="slide">
      <KeyboardModal>
        <SafeArea style={styles.container}>
          <View style={styles.viewContainer}>
            <PostlyIcon
              imageSelfStyle={styles.imageSelf}
              imageContainerStyle={screenSize}
            />
            <Paragraph fontSize={textSize}>
              Şifreni kurtarmak için bilgilerini gir.
            </Paragraph>
            <EmailInputModal
              styles={[styles.inputStyle, { height: textSize + 20 }]}
              placeHolder="Email"
            />
            <PasswordInputModal
              styles={[styles.inputStyle, { height: textSize + 20 }]}
              placeHolder="Şifre"
            />
            <Button onPressHandler={modalHandler}>
              <Paragraph fontSize={textSize - 4}>İptal</Paragraph>
            </Button>
          </View>
        </SafeArea>
      </KeyboardModal>
    </Modal>
  );
};

export default ForgetPasswordModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageSelf: {
    width: "100%",
    height: "100%",
  },
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
