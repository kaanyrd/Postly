import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";

const KeyboardModal = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
