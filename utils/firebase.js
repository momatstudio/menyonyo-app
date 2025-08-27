import { initializeApp } from "firebase/app";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAA7x5B7JPgA0SdjvDkh4JHD_xXtXKmOUo",
  authDomain: "localfood-bca1e.firebaseapp.com",
  projectId: "localfood-bca1e",
  storageBucket: "localfood-bca1e.appspot.com",
  messagingSenderId: "645796438159",
  appId: "1:645796438159:web:590c8cb1e20407936290fa",
  measurementId: "G-WD0QL1ZHRF",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
