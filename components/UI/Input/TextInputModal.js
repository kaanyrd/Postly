import { StyleSheet, TextInput } from "react-native";
import React from "react";

const TextInputModal = ({ placeHolder, styles }) => {
  return <TextInput placeholder={placeHolder} style={styles} />;
};

export default TextInputModal;

const styles = StyleSheet.create({});
