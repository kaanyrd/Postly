import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ onPressHandler, incomingStyle }) => {
  return (
    <Pressable style={incomingStyle} onPress={onPressHandler}>
      <Text>Click</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
