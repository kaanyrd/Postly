import { StyleSheet, Text } from "react-native";
import React from "react";

const Paragraph = ({ children, fontSize, fontWeight, style }) => {
  return (
    <Text style={[style, { fontSize: fontSize, fontWeight: fontWeight }]}>
      {children}
    </Text>
  );
};

export default Paragraph;

const styles = StyleSheet.create({});
