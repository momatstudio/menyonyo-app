import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MenuContainer from "../components/SingleRestaurant/MenuContainer";
import { deco } from "../data/style";

export default function OrderDetails() {
  return (
    <View style={styles.container}>
      <MenuContainer />
      <MenuContainer />
      <MenuContainer />
      <MenuContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: deco.white,
    flex: 1,
    alignItems: "center",
  },
});
