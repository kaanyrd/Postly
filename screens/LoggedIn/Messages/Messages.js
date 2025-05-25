import { StyleSheet, Text, Button, View } from "react-native";
import React, { useContext, useState } from "react";
import { LoginContext } from "../../../store/Context/LoginContextTemporarily";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import NewPostModal from "../../../components/Modals/NewPostModal";

const Messages = () => {
  const [postModal, setPostModal] = useState(false);
  const { setLoggedIn } = useContext(LoginContext);
  const bottomNavHeight = useBottomTabBarHeight();

  const logOut = () => {
    setLoggedIn(false);
  };

  const openPostModal = () => {
    setPostModal(true);
  };

  return (
    <View>
      <Text>Welcome to Postly</Text>
      <Button title="Çıkış" onPress={logOut} />
      <Button title="Yeni Post" onPress={openPostModal} />
      {postModal && (
        <NewPostModal postModal={postModal} setPostModal={setPostModal} />
      )}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});
