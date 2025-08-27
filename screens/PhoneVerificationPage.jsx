import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Auth } from "../utils/store/authContext/reducer";
import { auth } from "../utils/firebase";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";

export default function PhoneVerificationPage({ navigation, route }) {
  const { verificationId } = route.params;
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const { state, dispatch } = useContext(Auth);

  const codeVerificationHandler = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential).then((res) =>
        dispatch({ type: "VERIFICATION_CODE_CORRECT" })
      );
    } catch (error) {
      setMessage("The code is incorrect");
      console.log(error);
    }
  };

  console.log(state);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="back" size={24} color="black" style={{ left: 10 }} />
        </TouchableOpacity>
      </View>
      <Image
        style={{ height: 100, width: 100 }}
        source={require("../assets/adaptive-icon.png")}
      />
      <Text style={{}}>An SMS with a code has been sent to you.</Text>
      <Text style={styles.text1}>Enter the code below</Text>

      <View style={styles.textInputs}>
        <TextInput
          style={styles.input}
          placeholder="e.g. 11111"
          value={verificationCode}
          onChangeText={(text) => setVerificationCode(text)}
          keyboardType="phone-pad"
          autoCompleteType="tel"
        ></TextInput>

        <TouchableOpacity
          style={[styles.button, styles.button1]}
          onPress={codeVerificationHandler}
        >
          <Text style={styles.buttonText}>VERIFY</Text>
        </TouchableOpacity>
        <View>
          <Text style={{ color: "red" }}>{message}</Text>
        </View>
      </View>
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
