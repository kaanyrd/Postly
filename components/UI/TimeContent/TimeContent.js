import { StyleSheet, FlatList, View, Image, Text } from "react-native";
import React from "react";

const TimeContent = ({}) => {
  const posts = [
    {
      postId: 1,
      postedProfileId: 1,
      postedProfilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
      postedProfileUserName: "Kaan Yardımcı",
      postedProfileNickName: "kaanyrd",
      postedTime: "19.05.2025",
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
      postedProfileId: 2,
      postedProfilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
      postedProfileUserName: "Elif Kaya",
      postedProfileNickName: "elifkaya",
      postedTime: "18.05.2025",
      post: {
        imageUrl: "",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        content: "Bugünkü vlogum yayında! 🎥 #dailyvlog",
        likes: 42,
        comments: 5,
      },
    },
    {
      postId: 3,
      postedProfileId: 3,
      postedProfilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
      postedProfileUserName: "Mert Demir",
      postedProfileNickName: "mertdmr",
      postedTime: "17.05.2025",
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
      postedProfileId: 4,
      postedProfilePhoto: "https://randomuser.me/api/portraits/women/4.jpg",
      postedProfileUserName: "Ayşe Yılmaz",
      postedProfileNickName: "ayseyilmaz",
      postedTime: "17.05.2025",
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
      postedProfileId: 5,
      postedProfilePhoto: "https://randomuser.me/api/portraits/men/5.jpg",
      postedProfileUserName: "Ali Vural",
      postedProfileNickName: "alivrl",
      postedTime: "16.05.2025",
      post: {
        imageUrl: "",
        videoUrl: "",
        content: "Yeni bir haftaya başlarken enerjinizi yüksek tutun! 💪",
        likes: 33,
        comments: 7,
      },
    },
  ];

  return (
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
                <Text>{item.item.postedProfileUserName}</Text>
                <Text>{item.item.postedProfileNickName}</Text>
                <Text>{item.item.postedTime}</Text>
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
              <Text>Like</Text>
              <Text>Comment</Text>
              <Text>Share</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default TimeContent;

const styles = StyleSheet.create({
  post: {
    borderWidth: 2,
    borderColor: "green",
    padding: 8,
  },
  topContent: {
    borderWidth: 1,
    borderColor: "blue",
    flexDirection: "row",
    alignItems: "center",
  },
  ppImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileInfo: {
    flexDirection: "row",
  },
  contentImage: {
    width: "100%",
    height: 200,
  },
});
