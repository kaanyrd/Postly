import { StyleSheet, TextInput } from "react-native";
import React from "react";

const PasswordInputModal = ({ placeHolder, styles }) => {
  return (
    <TextInput
      placeholder={placeHolder}
      secureTextEntry={true}
      style={styles}
    />
  );
};

export default PasswordInputModal;

const styles = StyleSheet.create({});
