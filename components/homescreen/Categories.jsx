import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import CategoryContainer from "./CategoryContainer";
import { Fontisto } from "@expo/vector-icons";
import { deco, size } from "../../data/style";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Categories({ navigation, restaurants }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    if (selectedCategory !== category) {
      setSelectedCategory(category);
    }
  };
  return (
    <View style={styles.category}>
      <View style={styles.view2}>
        <View style={styles.textWrap}>
          <Text style={styles.text1}>Main</Text>
          <Text style={styles.text1}>Category</Text>
        </View>

        {/* <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Fontisto name="shopping-basket" size={30} color="orange" />
        </TouchableOpacity> */}
      </View>

      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <CategoryContainer
            item={item}
            selectedCategory={selectedCategory}
            handleCategoryPress={handleCategoryPress}
          />
        )}
        // keyExtractor={(item, index) => index}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    height: 220,
    width: Dimensions.get("window").width - 20,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "black",
    height: 100,
    // width: size.ScreenWidth - 20,
  },
  textWrap: {
    justifyContent: "flex-start",
    width: Dimensions.get("window").width - 60,
  },
  text1: {
    color: "orange",
    fontSize: 35,
    fontWeight: 600,
  },
});
