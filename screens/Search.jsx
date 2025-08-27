import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../components/homescreen/CustomInput";
import { deco, size } from "../data/style";
import { Image } from "react-native";
import { ScrollView } from "react-native";

export default function Search({ navigation }) {
  // const textInputRef = useRef(null);

  // useEffect(() => {
  //   textInputRef.current.focus();
  // }, []);
  return (
    <>
      <View style={styles.view1}>
        <CustomInput placeholder={"Search for your favourate food"} />
      </View>
      <ScrollView
        style={{
          backgroundColor: deco.white,
        }}
      >
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Image
              source={require("../assets/kota.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>Kota</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/meal.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>meal</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/pizza.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>pizza</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/burger1.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>burger1</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/kota.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>Kota</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/meal.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>meal</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/pizza.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>pizza</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/burger1.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>burger1</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/kota.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>Kota</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/meal.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>meal</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/pizza.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>pizza</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/burger1.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>burger1</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  view1: {
    alignItems: "center",
    backgroundColor: "white",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "85%",
    borderWidth: 2,
    borderColor: "black",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 12,
  },
  card: {
    alignItems: "center",
    width: size.ScreenWidth - 210,
    height: 150,
    borderWidth: 1,
    borderColor: deco.gray2,
    borderRadius: 10,
    marginTop: 10,
  },
  image: {
    resizeMode: "cover",
    width: size.ScreenWidth - 212,
    height: 100,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  text1: {
    padding: 10,
    fontWeight: 500,
  },
});
