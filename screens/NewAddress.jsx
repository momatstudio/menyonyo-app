import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import CustomInput from "../components/homescreen/CustomInput";
import AddressChild from "../components/AddressChild";

export default function NewAddress() {
  return (
    <View style={styles.container}>
      <CustomInput placeholder={"Enter a new address"} />
      <AddressChild />
      <AddressChild />
    </View>
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
    width: Dimensions.get("window").width - 50,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e4e4",
  },
  container2: {},
});
