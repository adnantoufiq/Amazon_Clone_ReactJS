import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYcB9T_8ZU_mQkJ6-wSYMu3-k7fRTtSXY",
  authDomain: "reactjs-bda18.firebaseapp.com",
  projectId: "reactjs-bda18",
  storageBucket: "reactjs-bda18.appspot.com",
  messagingSenderId: "662295970436",
  appId: "1:662295970436:web:fd1b60059c2bf6bb7338d1",
  measurementId: "G-F4038W1B5T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
console.log(auth);
