// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_7zpm1RtnKfgv6OeXjSKJQrPlRW6yjQE",
  authDomain: "medisist-otp-8783e.firebaseapp.com",
  projectId: "medisist-otp-8783e",
  storageBucket: "medisist-otp-8783e.appspot.com",
  messagingSenderId: "318981116370",
  appId: "1:318981116370:web:0b901b8a0c5123c725b80b",
  measurementId: "G-3RQ4SREJF0"




};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
