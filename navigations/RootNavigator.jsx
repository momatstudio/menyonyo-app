import Tabs from "./Tabs";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";

import { Auth } from "../utils/store/authContext/reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ConditionalNavigations() {
  const {
    state: { user },
  } = useContext(Auth);

  console.log(user);

  const [userInfoFromAsyncStorage, setUserInfoFromAsyncStorage] =
    useState(null);

  useEffect(() => {
    async function getDataInLocalstorageHandler() {
      const userData = await AsyncStorage.getItem("user");
      const userInfo = JSON.parse(userData);
      setUserInfoFromAsyncStorage(userInfo);
    }

    getDataInLocalstorageHandler();
  }, []);

  if (userInfoFromAsyncStorage?.verified || user.verified) return <Tabs />;
  else return <AuthStack />;
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <ConditionalNavigations />
    </NavigationContainer>
  );
}
