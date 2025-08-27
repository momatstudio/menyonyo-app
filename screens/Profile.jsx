import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Auth } from "../utils/store/authContext/reducer";
import { deco, size } from "../data/style";
import { FontAwesome } from "@expo/vector-icons";
import AddressChild from "../components/AddressChild";

export default function Profile() {
  const { dispatch } = useContext(Auth);
  const LogoutOutHandler = () => {
    dispatch({ type: "LOGOUT_USER" });
  };
  return (
    <View style={styles.container}>
      <View style={styles.personalInfo}>
        <View style={styles.image}></View>
        <Text style={styles.name}>Mohau Matthews Modika</Text>
        <TouchableOpacity>
          <Text style={styles.editAccount}>EDIT ACCOUNT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.savedPlaces}>
        <Text style={styles.savedPlacesText}>Saved Places</Text>
        <AddressChild title={"Home"} icon={"home"} />
        <AddressChild title={"Work"} icon={"work"} />
      </View>
      <TouchableOpacity>
        <View style={styles.savedPlaces}>
          <Text style={styles.savedPlacesText}>Log Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: deco.white },
  personalInfo: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: size.ScreenWidth - 20,
    height: 250,
    borderBottomWidth: 1,
    borderColor: deco.gray2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "gray",
  },
  name: {
    fontSize: 25,
    fontWeight: 600,
  },
  editAccount: {
    fontWeight: 500,
    paddingBottom: 10,
  },
  savedPlaces: {
    alignItems: "center",
    width: size.ScreenWidth - 20,
    // borderBottomWidth: 1,
    // borderColor: deco.gray2,
  },
  savedPlacesText: {
    alignSelf: "flex-start",
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 5,
    color: deco.black,
  },
});
