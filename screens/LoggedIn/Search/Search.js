import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Header from "../../../components/UI/Header/Header";

const Search = () => {
  return (
    <View>
      <TextInput placeholder="Ara..." style={styles.searchInput} />
      <Text style={styles.marks}>#Maç #Spor #Sağlık #Başkanlık</Text>
      <Header />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchInput: {
    height: 48,
    backgroundColor: "white",
    marginTop: 16,
    paddingLeft: 18,
  },
  marks: {
    fontWeight: "bold",
    marginVertical: 16,
  },
});
