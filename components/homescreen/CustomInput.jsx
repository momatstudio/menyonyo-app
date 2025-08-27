import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { size } from "../../data/style";
import { AntDesign } from "@expo/vector-icons";

export default function CustomInput({ placeholder }) {
  return (
    <View style={styles.address}>
      <AntDesign
        name="search1"
        size={24}
        style={{ color: "#656363", paddingRight: 10 }}
      />
      <TextInput placeholder={placeholder} style={styles.input1}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  address: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eceff2",
    height: 60,
    width: size.ScreenWidth - 20,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  input1: {
    width: "100%",
  },
});
