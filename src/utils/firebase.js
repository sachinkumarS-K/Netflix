// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0NfsYoC6W4g42ePYu8u5Ukiup1ojgpvA",
  authDomain: "netflix-gpt-2ee70.firebaseapp.com",
  projectId: "netflix-gpt-2ee70",
  storageBucket: "netflix-gpt-2ee70.appspot.com",
  messagingSenderId: "969699771274",
  appId: "1:969699771274:web:66a715285d50acd5457e73",
  measurementId: "G-6H6LBW71WL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();