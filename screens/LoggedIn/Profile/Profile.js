import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Profile = () => {
  const posts = [
    {
      postId: 1,
      postedProfileId: 0,
      postedProfilePhoto: "https://randomuser.me/api/portraits/men/0.jpg",
      postedProfileUserName: "Sen",
      postedProfileNickName: "seninNickin",
      postedTime: "3s önce",
      post: {
        imageUrl: "https://picsum.photos/300/200?random=1",
        videoUrl: "",
        content:
          "Bugün 19 Mayıs! Atatürk'ü Anma, Gençlik ve Spor Bayramımız kutlu olsun! 🇹🇷",
        likes: 15,
        comments: 10,
      },
    },
    {
      postId: 2,
      postedProfileId: 0,
      postedProfilePhoto: "https://randomuser.me/api/portraits/men/0.jpg",
      postedProfileUserName: "Sen",
      postedProfileNickName: "seninNickin",
      postedTime: "3s önce",
      post: {
        imageUrl: "https://picsum.photos/300/200?random=1",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        content: "Bugünkü vlogum yayında! 🎥 #dailyvlog",
        likes: 42,
        comments: 5,
      },
    },
    {
      postId: 3,
      postedProfileId: 0,
      postedProfilePhoto: "https://randomuser.me/api/portraits/men/0.jpg",
      postedProfileUserName: "Sen",
      postedProfileNickName: "seninNickin",
      postedTime: "3s önce",
      post: {
        imageUrl: "https://picsum.photos/300/200?random=2",
        videoUrl: "",
        content: "Yeni kitabım çıktı! 📚 Okuyanlar yorum bırakmayı unutmasın.",
        likes: 120,
        comments: 24,
      },
    },
    {
      postId: 4,
      postedProfileId: 0,
      postedProfilePhoto: "https://randomuser.me/api/portraits/men/0.jpg",
      postedProfileUserName: "Sen",
      postedProfileNickName: "seninNickin",
      postedTime: "3s önce",
      post: {
        imageUrl: "https://picsum.photos/300/200?random=3",
        videoUrl: "",
        content: "Gün batımında huzur 🌅",
        likes: 89,
        comments: 12,
      },
    },
    {
      postId: 5,
      postedProfileId: 0,
      postedProfilePhoto: "https://randomuser.me/api/portraits/men/0.jpg",
      postedProfileUserName: "Sen",
      postedProfileNickName: "seninNickin",
      postedTime: "3s önce",
      post: {
        imageUrl: "https://picsum.photos/300/200?random=1",
        videoUrl: "",
        content: "Yeni bir haftaya başlarken enerjinizi yüksek tutun! 💪",
        likes: 33,
        comments: 7,
      },
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.postId.toString()}
        ListHeaderComponent={
          <View>
            <View style={styles.topContainer}>
              <Image
                source={{ uri: "https://picsum.photos/300/200?random=1" }}
                style={styles.wallpaper}
              />
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/0.jpg",
                }}
                style={styles.pp}
              />
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.profileInfo}>
                <View>
                  <Text>
                    Kaan Yardımcı <Text style={styles.lightText}>@kaanyrd</Text>
                  </Text>
                </View>
                <View style={styles.profileInfos}>
                  <Text>Istanbul, 19/05/2025 Tarihinde katıldı</Text>
                </View>
                <View style={styles.followers}>
                  <Text>408 Takip edilen</Text>
                  <Text>8 Takipçi</Text>
                </View>
              </View>
              <Text>Belki buraya bir bar? Retweet, Likes, Saved</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.post}>
            <View style={styles.topContent}>
              <Image
                style={styles.ppImage}
                source={{ uri: item.postedProfilePhoto }}
              />
              <View style={styles.postInfo}>
                <View style={styles.profileInfoContent}>
                  <Text>{item.postedProfileUserName}</Text>
                  <Text style={styles.lightText}>
                    @{item.postedProfileNickName}
                  </Text>
                </View>
                <Text style={styles.timeSpan}>● {item.postedTime}</Text>
              </View>
            </View>
            <View style={styles.content}>
              <Text>{item.post.content}</Text>
              <Image
                style={styles.contentImage}
                source={{ uri: item.post.imageUrl }}
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
                  <Ionicons name="pencil-sharp" size={24} />
                  <Text>12</Text>
                </View>
              </View>
              <Ionicons
                style={styles.shareButton}
                name="share-social-outline"
                size={24}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
  postInfo: {
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
  container: {},
  topContainer: {
    position: "relative",
  },
  wallpaper: {
    width: "100%",
    height: 200,
  },
  pp: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: "absolute",
    bottom: 0,
    left: "10%",
    borderWidth: 4,
    borderColor: "white",
    transform: [{ translateY: "50%" }],
  },
  bottomContainer: {
    marginTop: 40,
  },
  profileInfo: {
    padding: 8,
    backgroundColor: "white",
  },
  profileInfos: {
    marginVertical: 8,
  },
  followers: {
    flexDirection: "row",
    gap: 8,
  },
  myPosts: {},
});
