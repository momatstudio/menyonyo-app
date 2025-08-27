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

import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";

import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { auth, firebaseConfig } from "../utils/firebase";
import { Auth } from "../utils/store/authContext/reducer";
import { sendVerificationCodeHandler } from "../utils/store/authContext/actions";
import { VERIFICATION_ID_RECIEVED } from "../utils/store/authContext/constants";

export default function SignInWithPhoneNo({ navigation }) {
  const { state, dispatch } = useContext(Auth);

  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendVerificationHandler = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationIdd = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      navigation.navigate("Phone Verification", {
        verificationId: verificationIdd,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const confirmCode = async () => {
  //   try {
  //     const credential = PhoneAuthProvider.credential(
  //       verificationId,
  //       verificationCode
  //     );
  //     await signInWithCredential(auth, credential).then((res) =>
  //       console.log(res)
  //     );

  //   } catch (error) {
  //     showMessage({ text: `Error: ${error.message}`, color: "red" });
  //   }
  // };

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
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        style={styles.container}
      />
      <Text style={styles.text1}>Enter Phone Number</Text>

      <View style={styles.textInputs}>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          placeholder="e.g. +27712345678"
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
          autoCompleteType="tel"
        ></TextInput>

        <TouchableOpacity
          style={[styles.button, styles.button1]}
          // ref={touchableOpacityRef}
          id="sign-in-button"
          onPress={sendVerificationHandler}
        >
          <Text style={styles.buttonText}>SEND VERIFICATION CODE</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.textInputs}>
        <TextInput
          style={styles.input}
          value={verificationCode}
          placeholder="Confirm Code"
          onChangeText={(text) => setVerificationCode(text)}
          keyboardType="number-pad"
          // autoCompleteType="tel"
        ></TextInput>

        <TouchableOpacity
          style={[styles.button, styles.button1]}
          // ref={touchableOpacityRef}
          id="sign-in-button"
          onPress={confirmCode}
        >
          <Text style={styles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View> */}
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
