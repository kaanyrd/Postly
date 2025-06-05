import { Button, Modal, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const PostModal = ({ postModal, setPostModal }) => {
  const closeModal = () => {
    setPostModal(false);
  };

  const addComment = () => {
    console.log("Hello World!");
  };

  return (
    <Modal visible={postModal} animationType="slide">
      <View style={styles.postContainer}>
        <View style={styles.topContentContainer}>
          <View style={styles.topContent}>
            <Image
              style={styles.ppImage}
              source={require("../../assets/ExPhoto.jpg")}
            />
            <View style={styles.ppInfo}>
              <Text>Kaan Yardımcı</Text>
              <Text>@kaanyrd</Text>
            </View>
          </View>
          <Button title="Kapat" onPress={closeModal} />
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/ExPhoto.jpg")}
            style={styles.postImage}
          />
          <View style={styles.postInfo}>
            <Text>25/05/2025</Text>
            <Text>-</Text>
            <Text>17:33 saatinde</Text>
          </View>
          <View style={styles.bottomContent}>
            <View style={styles.bottomContentLeft}>
              <View style={styles.likeButtonContainer}>
                <Image
                  style={styles.likeButton}
                  source={require("../../assets/Postly_Without_Background.png")}
                />
                <Text>312</Text>
              </View>
              <View style={styles.commentButtonContainer}>
                <Ionicons
                  name="pencil-sharp"
                  size={24}
                  color=""
                  onPress={addComment}
                />
                <Text>12</Text>
              </View>
            </View>
            <Ionicons
              style={styles.shareButton}
              name="share-social-outline"
              size={24}
              color=""
            />
          </View>
        </View>
        <View style={styles.commentContainer}>
          <Text>Comments...</Text>
        </View>
      </View>
    </Modal>
  );
};

export default PostModal;

const styles = StyleSheet.create({
  postContainer: {
    padding: 8,
  },
  postImage: {
    width: "100%",
    height: 200,
  },
  ppImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  topContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  ppInfo: {
    flexDirection: "column",
  },
  postInfo: {
    flexDirection: "row",
    paddingVertical: 4,
    gap: 8,
  },
  likeButton: {
    width: 24,
    height: 24,
    backgroundColor: "yellow",
  },
  bottomContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomContentLeft: {
    flexDirection: "row",
  },
  commentButtonContainer: {
    flexDirection: "row",
  },
  likeButtonContainer: {
    flexDirection: "row",
  },
});
