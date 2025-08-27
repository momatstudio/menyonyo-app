import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";

export default function Address({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.location}
        onPress={() => navigation.navigate("Delivery Address")}
      >
        <MaterialIcons name="location-on" size={24} color="orange" />
        <Text style={styles.text1}>Ga-Maphalle</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <Fontisto name="shopping-basket" size={25} color="orange" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 50,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  location: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  text1: { fontWeight: 600 },
});
