import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ children, onPressHandler, incomingStyle }) => {
  return (
    <Pressable style={incomingStyle} onPress={onPressHandler}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonText: {
    textAlign: "center",
  },
});
