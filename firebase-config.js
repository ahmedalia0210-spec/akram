// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD53tA64lJNP65CnkRrqUCvvPGLuHWkCNc",
  authDomain: "ali34321244.firebaseapp.com",
  databaseURL: "https://ali34321244-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ali34321244",
  storageBucket: "ali34321244.firebasestorage.app",
  messagingSenderId: "720027291510",
  appId: "1:720027291510:web:09043710fb2f5bdb587457",
  measurementId: "G-MJYP8468G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
