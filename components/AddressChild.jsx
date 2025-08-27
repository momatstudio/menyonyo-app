import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { size } from "../data/style";

export default function AddressChild() {
  return (
    <TouchableOpacity style={styles.addressList}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <MaterialIcons
          name="location-on"
          size={24}
          color="black"
          style={{ paddingRight: 20 }}
        />
        <View style={styles.container2}>
          <Text style={{ fontSize: 15, fontWeight: 700 }}>Giyani</Text>
          <Text style={{ fontSize: 12 }}>
            032 Mokhoba Village, Giyani, 0836
          </Text>
        </View>
      </View>
      <Ionicons name="checkmark-circle" size={24} color="#12e16c" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  addressList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    marginTop: 10,
    width: size.ScreenWidth - 50,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e4e4",
  },
  container2: {},
});
