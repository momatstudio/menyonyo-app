import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { deco, size } from "../../data/style";

export default function MenuContainer() {
  return (
    <View style={[styles.view3, styles.view3_1]}>
      <View style={{}}>
        <Text style={{ fontWeight: 600, fontSize: 15 }}>MotoBike Kota</Text>
        <Text style={{ fontWeight: 500, fontSize: 13 }}>
          Chips, palon, vianna
        </Text>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 15,
            color: "orange",
            paddingTop: 10,
          }}
        >
          R15,00
        </Text>
      </View>
      <Image
        source={require("../../assets/kota.jpg")}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view3: {
    justifyContent: "center",
    height: "auto",
    width: size.ScreenWidth - 20,
    backgroundColor: deco.white,
    marginTop: 10,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  view3_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    overflow: "hidden",
  },
});
