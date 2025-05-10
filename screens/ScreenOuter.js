import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./LoggedOut/Others/Home";
import Login from "./LoggedOut/LogIn/Login";
import SignIn from "./LoggedOut/SignIn/SignIn";
import ForgetPassword from "./LoggedOut/Others/ForgetPassword";
import { NavigationContainer } from "@react-navigation/native";
import { LoginContext } from "../store/Context/LoginContextTemporarily";
import Time from "./LoggedIn/Time/Time";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./LoggedIn/Profile/Profile";
import Favourites from "./LoggedIn/Favourites/Favourites";
import Search from "./LoggedIn/Search/Search";
import Notifications from "./LoggedIn/Notifications/Notifications";
import Messages from "./LoggedIn/Messages/Messages";
import Header from "../components/UI/Header/Header";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const ScreenOuter = () => {
  const { loggedIn } = useContext(LoginContext);
  const LoggedScreen = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="DrawerScreen">
          <Tab.Screen name="Time" component={Time}></Tab.Screen>
          <Tab.Screen name="Search" component={Search}></Tab.Screen>
          <Tab.Screen
            name="Notifications"
            component={Notifications}
          ></Tab.Screen>
          <Tab.Screen name="Messages" component={Messages}></Tab.Screen>
          <Tab.Screen
            name="DrawerScreen"
            component={DrawerScreen}
            options={{ headerShown: false }}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

  const DrawerScreen = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Profil" component={Profile} />
        <Drawer.Screen name="Favourites" component={Favourites} />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      {loggedIn ? (
        <LoggedScreen />
      ) : (
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
      )}
    </>
  );
};

export default ScreenOuter;

const styles = StyleSheet.create({});
