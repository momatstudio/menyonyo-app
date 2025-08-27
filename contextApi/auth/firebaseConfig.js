// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA7x5B7JPgA0SdjvDkh4JHD_xXtXKmOUo",
  authDomain: "localfood-bca1e.firebaseapp.com",
  projectId: "localfood-bca1e",
  storageBucket: "localfood-bca1e.appspot.com",
  messagingSenderId: "645796438159",
  appId: "1:645796438159:web:590c8cb1e20407936290fa",
  measurementId: "G-WD0QL1ZHRF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
