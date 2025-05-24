import { StyleSheet, View } from "react-native";
import SafeArea from "../../../components/UI/SafeArea/SafeArea";
import TimeContent from "../../../components/UI/TimeContent/TimeContent";

const Time = () => {
  const posts = [
    {
      postId: 1,
      postedProfileId: 1,
      postedProfilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
      postedProfileUserName: "Kaan Yardımcı",
      postedProfileNickName: "kaanyrd",
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
      postedProfileId: 2,
      postedProfilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
      postedProfileUserName: "Elif Kaya",
      postedProfileNickName: "elifkaya",
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
      postedProfileId: 3,
      postedProfilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
      postedProfileUserName: "Mert Demir",
      postedProfileNickName: "mertdmr",
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
      postedProfileId: 4,
      postedProfilePhoto: "https://randomuser.me/api/portraits/women/4.jpg",
      postedProfileUserName: "Ayşe Yılmaz",
      postedProfileNickName: "ayseyilmaz",
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
      postedProfileId: 5,
      postedProfilePhoto: "https://randomuser.me/api/portraits/men/5.jpg",
      postedProfileUserName: "Ali Vural",
      postedProfileNickName: "alivrl",
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
    <SafeArea>
      <View style={styles.container}>
        <TimeContent posts={posts} />
      </View>
    </SafeArea>
  );
};

export default Time;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
