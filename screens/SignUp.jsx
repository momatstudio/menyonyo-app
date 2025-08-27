import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ScrollViewBase,
} from "react-native";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../contextApi/auth/AuthContext";
import * as SecureStore from "expo-secure-store";

export default function SignUp({ navigation }) {
  const [phoneNo, setPhoneNo] = useState("");
  const [fullnames, setFullnames] = useState("");
  // For now
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  // const { setUserToken } = useContext(AuthContext);

  const handleSignUp = () => {
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     SecureStore.setItemAsync("userToken", userCredential.user.uid);
    //   })
    //   .then(() => {
    //     // setUserToken(userCredential.user.uid); // Update the userToken state
    //   })
    //   .catch((error) => {
    //     console.log("Error storing user token:", error);
    //   })
    //   .catch((error) => {
    //     console.log("Error:", error);
    //   });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" style={{ left: 10 }} />
        </TouchableOpacity>
      </View>
      <Image
        style={{ height: 100, width: 100 }}
        source={require("../assets/adaptive-icon.png")}
      />
      <Text style={styles.text1}>SIGN UP</Text>

      <View style={styles.textInputs}>
        <TextInput
          style={styles.input}
          value={phoneNo}
          placeholder="Phone Number"
          keyboardType="numeric"
          onChangeText={(text) => setPhoneNo(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Full Names"
          value={fullnames}
          onChangeText={(text) => setFullnames(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Verify Password"
          value={verifyPassword}
          onChangeText={(text) => setVerifyPassword(text)}
          secureTextEntry
        ></TextInput>
        <TouchableOpacity
          style={[styles.button, styles.button1]}
          onPress={() => navigation.navigate("HomeStack")}
        >
          <Text style={styles.buttonText} onPress={handleSignUp}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
      <Text>or sign up with </Text>
      <TouchableOpacity style={[styles.button, styles.button2]}>
        <Text style={[styles.buttonText, { color: "black" }]}>GOOGLE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.button3]}>
        <Text style={[styles.buttonText, { color: "black" }]}>FACEBOOK</Text>
      </TouchableOpacity>
    </ScrollView>
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
