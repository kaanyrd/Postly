import { Button, Modal, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const PostModal = ({ postModal, setPostModal }) => {
  const closeModal = () => {
    setPostModal(false);
  };

  return (
    <Modal visible={postModal} animationType="slide">
      <View style={styles.postContainer}>
        <View style={styles.topContent}>
          <Image />
          <Text>Kaan Yardımcı</Text>
          <Text>@kaanyrd</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/ExPhoto.jpg")}
            style={styles.postImage}
          />
          <Text>25/05/2025</Text>
          <Text>17:33 saatinde</Text>
          <View>
            <View>
              <Text>Beğeni</Text>
              <Text>Yorum</Text>
            </View>
            <Text>Share Button</Text>
          </View>
        </View>
        <View style={styles.bottomContent}>
          <Text>Comments...</Text>
        </View>
        <Text>Post Modal</Text>
        <Button title="Kapat" onPress={closeModal} />
      </View>
    </Modal>
  );
};

export default PostModal;

const styles = StyleSheet.create({
  postImage: {
    width: "100%",
    height: 200,
  },
});
