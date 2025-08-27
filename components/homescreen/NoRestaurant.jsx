import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function NoRestaurant({ navigation }) {
  return (
    <View style={styles.emptyRes}>
      <Image
        source={require("../../assets/no-res.jpg")}
        style={{ height: 200, width: 220 }}
      />
      <Text style={styles.text2}>No Avaliable Restaurant around you</Text>
      <Text style={styles.text3}>
        They soon will be available. Please check back soon!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyRes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: { textAlign: "center" },

  text2: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 600,
    color: "black",
  },
  text3: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 400,
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    color: "black",
  },
});
