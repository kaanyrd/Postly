import { useState } from "react";
import { StyleSheet, FlatList, View, Image, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PostModal from "../../Modals/PostModal";

const TimeContent = ({ posts }) => {
  const [postModal, setPostModal] = useState(false);

  const openModalFunction = () => {
    setPostModal(true);
  };

  return (
    <>
      {postModal ? (
        <PostModal setPostModal={setPostModal} postModal={postModal} />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.postId}
          renderItem={(item) => {
            return (
              <View style={styles.post}>
                <View style={styles.topContent}>
                  <Image
                    style={styles.ppImage}
                    source={{ uri: item.item.postedProfilePhoto }}
                  />
                  <View style={styles.profileInfo}>
                    <View style={styles.profileInfoContent}>
                      <Text>{item.item.postedProfileUserName}</Text>
                      <Text style={styles.lightText}>
                        @{item.item.postedProfileNickName}
                      </Text>
                    </View>
                    <Text style={styles.timeSpan}>
                      ● {item.item.postedTime}
                    </Text>
                  </View>
                </View>
                <View style={styles.content}>
                  <Text>{item.item.post.content}</Text>
                  <Image
                    style={styles.contentImage}
                    source={{ uri: item.item.post.imageUrl }}
                  />
                </View>
                <View style={styles.bottomContent}>
                  <View style={styles.bottomContentLeft}>
                    <View style={styles.likeButtonContainer}>
                      <Image
                        style={styles.likeButton}
                        source={require("../../../assets/Postly_Without_Background.png")}
                      />
                      <Text>312</Text>
                    </View>
                    <View style={styles.likeButtonContainer}>
                      <Ionicons
                        name="pencil-sharp"
                        size={24}
                        color=""
                        onPress={openModalFunction}
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
            );
          }}
        />
      )}
    </>
  );
};

export default TimeContent;

export const styles = StyleSheet.create({
  post: {
    padding: 8,
    backgroundColor: "white",
    elevation: 5,
  },
  bottomContent: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomContentLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  likeButtonContainer: {
    flexDirection: "row",
    gap: 2,
  },
  likeButton: {
    width: 24,
    height: 24,
    backgroundColor: "yellow",
  },
  content: {
    marginTop: 8,
    gap: 8,
  },
  topContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  ppImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  profileInfoContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  contentImage: {
    width: "100%",
    height: 200,
  },
  lightText: {
    color: "gray",
  },
  timeSpan: {
    color: "gray",
    alignSelf: "flex-end",
  },
  shareButton: {},
});
