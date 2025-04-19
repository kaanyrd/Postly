import { StyleSheet, TextInput } from "react-native";
import React from "react";

const EmailInputModal = ({ placeHolder, styles }) => {
  return (
    <TextInput
      placeholder={placeHolder}
      keyboardType="email-address"
      style={styles}
    />
  );
};

export default EmailInputModal;

const styles = StyleSheet.create({});
