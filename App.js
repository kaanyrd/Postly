import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import ColorsExample from "./components/Staff/ColorsExample";
import ScreenOuter from "./screens/ScreenOuter";
import ScreenContextProvider from "./store/Context/ScreenContext";
import LoginContextProvider from "./store/Context/LoginContextTemporarily";

export default function App() {
  return (
    <>
      <LoginContextProvider>
        <ScreenContextProvider>
          <ScreenOuter />
          {/* <ColorsExample /> */}
          <StatusBar style="auto" />
        </ScreenContextProvider>
      </LoginContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
