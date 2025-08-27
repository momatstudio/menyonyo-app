import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import RootNavigator from "./navigations/RootNavigator";

import React, { useCallback, useContext, useEffect, useState } from "react";
// import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
// import * as Font from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as SecureStore from "expo-secure-store";
import { Auth, AuthProvider } from "./utils/store/authContext/reducer";
import Cart from "./screens/Cart";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const { state } = useContext(Auth);

  useEffect(() => {
    async function prepare() {
      try {
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <AuthProvider>
      <GestureHandlerRootView
        style={styles.container}
        onLayout={onLayoutRootView}
      >
        <RootNavigator />
        {/* <Cart /> */}
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
  },
});
