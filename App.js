import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ColorsExample from "./components/Staff/ColorsExample";
import ScreenOuter from "./screens/ScreenOuter";

export default function App() {
  return (
    <>
      <ScreenOuter />
      {/* <ColorsExample /> */}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
