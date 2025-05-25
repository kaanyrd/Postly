import {
  Modal,
  StyleSheet,
  Image,
  Button,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { Light_Theme } from "../../constants/General_Styles";

const NewPostModal = ({ postModal, setPostModal }) => {
  const closeModal = () => {
    setPostModal(false);
  };

  return (
    <Modal visible={postModal} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.buttonContainer}>
          <Button title="İptal Et" onPress={closeModal} />
          <Button title="Gönder" />
        </View>
        <View style={styles.textContainer}>
          <Image
            style={styles.ppImage}
            source={require("../../assets/New_Postpng.png")}
          />
          <TextInput
            style={styles.textSelf}
            multiline={true}
            numberOfLines={18}
          />
        </View>
      </View>
    </Modal>
  );
};

export default NewPostModal;

const styles = StyleSheet.create({
  modalContainer: {
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    borderWidth: 2,
    borderColor: Light_Theme.primary,
    marginTop: 8,
    borderRadius: 8,
  },
  textSelf: {
    height: "50%",
  },
  ppImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
