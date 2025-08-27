import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import DonationsCategoryList from "./DonationsCategoryList";
import { donations } from "../../data";

export default function RestaurantsList() {
  return (
    <View style={styles.resList}>
      <Text style={styles.text1}>Pork</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NeGntWA0CHpaqF8h4ZKmQMM1Sgl8iTDOzQ&usqp=CAU",
          }}
          style={{ height: "100%", width: "100%" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resList: {
    flex: 1,
    width: Dimensions.get("window").width - 20,
    paddingTop: 10,
  },
  text1: {
    fontSize: 25,
    fontWeight: 500,
    padding: 10,
  },
  card: {
    height: 200,
    width: "100%",
    borderWidth: 1,
    borderColor: "#f8f2f2",
    borderRadius: 10,
    overflow: "hidden",
  },
});
