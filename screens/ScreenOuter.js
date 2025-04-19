import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./LoggedOut/Others/Home";
import Login from "./LoggedOut/LogIn/Login";
import SignIn from "./LoggedOut/SignIn/SignIn";
import ForgetPassword from "./LoggedOut/Others/ForgetPassword";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const ScreenOuter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenOuter;

const styles = StyleSheet.create({});
