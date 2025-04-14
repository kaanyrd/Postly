import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SafeArea = ({ children, style }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SafeArea;

const styles = StyleSheet.create({});
