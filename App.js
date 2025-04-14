import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import ColorsExample from "./components/Staff/ColorsExample";
import ScreenOuter from "./screens/ScreenOuter";
import ScreenContextProvider from "./store/Context/ScreenContext";

export default function App() {
  return (
    <>
      <ScreenContextProvider>
        <ScreenOuter />
        {/* <ColorsExample /> */}
        <StatusBar style="auto" />
      </ScreenContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
