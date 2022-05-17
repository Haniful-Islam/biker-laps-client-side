// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSnBKizC2GdF_ngWdmikhBT2XxSKM9CjE",
  authDomain: "biker-labs.firebaseapp.com",
  projectId: "biker-labs",
  storageBucket: "biker-labs.appspot.com",
  messagingSenderId: "76381027771",
  appId: "1:76381027771:web:31243ee31a73c704ca189e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;