import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ColorsExample from "./components/Staff/ColorsExample";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <ColorsExample />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
