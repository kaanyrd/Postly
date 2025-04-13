import { Modal, StyleSheet, Text, TextInput } from "react-native";
import React from "react";
import Button from "../UI/Button/Button";

const ForgetPasswordModal = ({ isVisible, modalHandler }) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <Text>Şifreni kurtarmak için bilgilerini gir.</Text>
      <Text>Email</Text>
      <TextInput placeholder="Email" />
      <Text>Şifre</Text>
      <TextInput placeholder="Şifre" />
      <Button onPressHandler={modalHandler}>İptal</Button>
    </Modal>
  );
};

export default ForgetPasswordModal;

const styles = StyleSheet.create({});
