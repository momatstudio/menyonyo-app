import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import logo from "../assets/adaptive-icon.png";
import { AntDesign } from "@expo/vector-icons";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="left" size={24} color="black" style={{ left: 10 }} />
        </TouchableOpacity>
      </View>
      <Image
        style={{ height: 100, width: 100 }}
        source={require("../assets/adaptive-icon.png")}
      />
      <Text style={styles.text1}>SIGN IN</Text>

      <View style={styles.textInputs}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TouchableOpacity
          style={[styles.button, styles.button1]}
          onPress={() => navigation.navigate("HomeStack")}
        >
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
      <Text>or sign in with </Text>
      <TouchableOpacity style={[styles.button, styles.button2]}>
        <Text style={[styles.buttonText, { color: "black" }]}>GOOGLE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.button3]}>
        <Text style={[styles.buttonText, { color: "black" }]}>FACEBOOK</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 20,
  },
  header: {
    width: Dimensions.get("window").width,
  },
  text1: {
    fontSize: 30,
    fontWeight: 300,
    paddingTop: 25,
    paddingBottom: 40,
  },
  textInputs: {
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    width: Dimensions.get("window").width - 100,
    height: 50,
    marginBottom: 15,
    borderColor: "#000000",
    padding: 0,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 50,
    borderRadius: 40,
    marginBottom: 10,
  },
  button1: {
    backgroundColor: "#000000",
  },
  button2: {
    borderWidth: 1,
    borderColor: "#000000",
    color: "black",
    marginTop: 10,
  },
  button3: {
    borderWidth: 1,
    borderColor: "#000000",
    color: "black",
  },
  buttonText: {
    color: "white",
  },
});
