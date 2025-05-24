import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PostlyIcon from "../Icons/PostlyIcon";
import { ScreenContext } from "../../../store/Context/ScreenContext";
import { screenIconSizer } from "../../../util/GeneralFunctions";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  let screenData = useContext(ScreenContext);
  let screenSize = screenIconSizer(screenData);

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={[styles.headerContainer, { marginTop: insets.top }]}>
      <Button title="Drawer" onPress={() => openDrawer()} />
      <View style={[styles.imgOverflow, { borderRadius: screenSize / 4 }]}>
        <PostlyIcon
          imageContainerStyle={screenSize / 2}
          imageSelfStyle={styles.imgContainer}
        />
      </View>
      <Text>+</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    borderWidth: 2,
    borderColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  imgContainer: {
    width: "100%",
    height: "100%",
  },
  imgOverflow: {
    overflow: "hidden",
  },
});
