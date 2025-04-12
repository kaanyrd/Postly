import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dark_Theme, Light_Theme } from "../../constants/General_Styles";

const ColorsExample = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Light</Text>
        <View>
          <View style={[styles.general, styles.colors1]}></View>
          <View style={[styles.general, styles.colors2]}></View>
          <View style={[styles.general, styles.colors3]}></View>
          <View style={[styles.general, styles.colors4]}></View>
          <View style={[styles.general, styles.colors5]}></View>
          <View style={[styles.general, styles.colors6]}></View>
          <View style={[styles.general, styles.colors7]}></View>
        </View>
      </View>
      <View>
        <Text>Dark</Text>
        <View style={[styles.general, styles.colors8]}></View>
        <View style={[styles.general, styles.colors9]}></View>
        <View style={[styles.general, styles.colors10]}></View>
        <View style={[styles.general, styles.colors11]}></View>
        <View style={[styles.general, styles.colors12]}></View>
        <View style={[styles.general, styles.colors13]}></View>
      </View>
    </View>
  );
};

export default ColorsExample;

const styles = StyleSheet.create({
  colors1: {
    backgroundColor: Light_Theme.accent,
  },
  colors2: {
    backgroundColor: Light_Theme.background,
  },
  colors3: {
    backgroundColor: Light_Theme.cardBackground,
  },
  colors4: {
    backgroundColor: Light_Theme.primary,
  },
  colors5: {
    backgroundColor: Light_Theme.primaryDark,
  },
  colors6: {
    backgroundColor: Light_Theme.primaryLight,
  },
  colors7: {
    backgroundColor: Light_Theme.text,
  },
  colors8: {
    backgroundColor: Dark_Theme.background,
  },
  colors9: {
    backgroundColor: Dark_Theme.cardBackground,
  },
  colors10: {
    backgroundColor: Dark_Theme.icon,
  },
  colors11: {
    backgroundColor: Dark_Theme.primary,
  },
  colors12: {
    backgroundColor: Dark_Theme.primaryAlt,
  },
  colors13: {
    backgroundColor: Dark_Theme.text,
  },
  general: {
    width: 40,
    height: 40,
  },
  container: {
    flexDirection: "row",
  },
});
