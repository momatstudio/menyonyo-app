import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CategoryName({ title }) {
  return (
    <View style={styles.category}>
      <Text style={styles.categoryTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    marginTop: 30,
    paddingLeft: 5,
    marginBottom: 5,
    zIndex: 50,
  },
  categoryTitle: {
    // paddingBottom: 10,
    paddingLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});
