import { useContext } from "react";
import {
  VERIFICATION_ID_RECIEVED,
  VERIFICATION_CODE_CORRECT,
  VERIFICATION_CODE_INCORRECT,
} from "./constants";
import { Auth } from "./reducer";
import { PhoneAuthProvider, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../../firebase";
import { Alert } from "react-native";

export const sendVerificationCodeHandler = (
  phoneNumber,
  recaptchaVerifier,
  dispatch
) => {
  return async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      await phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then((verificationId) =>
          dispatch({
            type: VERIFICATION_ID_RECIEVED,
            payload: verificationId,
          })
        );
    } catch (error) {
      console.log(error);
    }
  };
};

export const verifyCodeHandler = (
  verificationId,
  verificationCode,
  dispatch
) => {
  return async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential).then((res) =>
        dispatch({ type: VERIFICATION_CODE_CORRECT, payload: res })
      );
    } catch (error) {
      dispatch({ type: VERIFICATION_CODE_INCORRECT });
    }
  };
};
