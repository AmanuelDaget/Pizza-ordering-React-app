// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbY_UWKtqT7OoHS40DUQibKoV40UtmKJE",
  authDomain: "react-pizza-order-a.firebaseapp.com",
  projectId: "react-pizza-order-a",
  storageBucket: "react-pizza-order-a.appspot.com",
  messagingSenderId: "603127497080",
  appId: "1:603127497080:web:29ed1507ab7a9f91e0888d",
  measurementId: "G-H8ZT38WG3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db = getFirestore(app);