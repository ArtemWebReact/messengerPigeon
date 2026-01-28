// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ0Ld1hzJ2ZKbPfw96ijXzFZXbd71bSFA",
  authDomain: "simplechat-18531.firebaseapp.com",
  projectId: "simplechat-18531",
  storageBucket: "simplechat-18531.firebasestorage.app",
  messagingSenderId: "86048635514",
  appId: "1:86048635514:web:a605d0d6453396afa259c3",
  measurementId: "G-KD11F1DTJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
