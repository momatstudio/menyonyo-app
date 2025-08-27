import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MenuContainer from "../components/SingleRestaurant/MenuContainer";
import { deco, size, weight } from "../data/style";

export default function Cart() {
  return (
    <View style={styles.container}>
      <View style={styles.view2}>
        <View style={styles.view1}>
          <Text style={styles.text1}>My</Text>
          <Text style={styles.text1}>Cart</Text>
        </View>
        {/* <View style={{ justifyContent: "center" }}>
          <Text style={{ color: "orange", fontSize: 30, fontWeight: 600 }}>
            Total
          </Text>
          <Text style={{ color: "black", fontSize: 20, fontWeight: 600 }}>
            R100.00
          </Text>
        </View> */}
      </View>
      <MenuContainer />
      <MenuContainer />
      <MenuContainer />
      <MenuContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: size.ScreenWidth - 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: size.ScreenWidth - 20,
  },
  view1: {
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "black",
    height: 100,
    // width: size.ScreenWidth - 20,
  },
  text1: {
    color: "orange",
    fontSize: 35,
    fontWeight: 600,
  },
});
