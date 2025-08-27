import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";

export default function CategoryContainer({
  item,
  selectedCategory,
  handleCategoryPress,
}) {
  return (
    <TouchableOpacity key={item.id} onPress={() => handleCategoryPress(item)}>
      <View
        style={[
          styles.categoryContainer,
          selectedCategory?.id === item.id && styles.selectedCategoryButton,
        ]}
      >
        <View style={styles.image}>
          <Image
            source={{ uri: item.src }}
            style={{ width: 50, height: 50, resizeMode: "cover" }}
          />
        </View>
        <Text style={styles.categoryContainerText}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  categoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    // borderColor: "#f8f2f2",
    borderRadius: 40,
    // borderWidth: 1,
    height: 100,
    width: 70,
    marginLeft: 20,
  },
  selectedCategoryButton: {
    backgroundColor: "#ffff",
  },
  categoryContainerText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    // borderWidth: 1,
    // borderColor: "#f8f2f2",
    overflow: "hidden",
    marginBottom: 5,
  },
});
