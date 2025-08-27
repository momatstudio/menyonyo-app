import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Cover({ navigation }) {
  return (
    <View style={styles.cover}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.logo}>HeartFunds</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={40}
            style={{ paddingTop: 20, color: "white" }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.salute}>Hello, {"Mohau"}</Text>
      <Text style={styles.title}>Make someone's life better today</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={24} style={{ color: "#BD47B9" }} />
          <Text style={styles.searchText}>Search campaigns</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 242,
    backgroundColor: "#BD47B9",
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 20,
    color: "#ffffff",
  },
  salute: {
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: 20,
    color: "#ffffff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 10,
    color: "#ffffff",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
    height: 50,
    elevation: 4,
    shadowColor: "#858284",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    // borderBottomWidth: 2,
    // borderBottomColor: "#cf94cc",
    // marginTop: 15,
    zIndex: 100,
  },
  searchText: {
    paddingLeft: 10,
    color: "#cbcbcb",
  },
});
