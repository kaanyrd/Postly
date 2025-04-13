import { Image, StyleSheet, View } from "react-native";
import React from "react";

const PostlyIcon = ({ imageContainerStyle, imageSelfStyle }) => {
  const imageSource = "../../../assets/Postly_General.png";

  return (
    <View style={imageContainerStyle}>
      <Image style={imageSelfStyle} source={require(imageSource)} />
    </View>
  );
};

export default PostlyIcon;

const styles = StyleSheet.create({});
