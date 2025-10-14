// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZo8_HK4wSELXoVpigm4ap7LiYYGpfZ-o",
  authDomain: "webmilsabores-406df.firebaseapp.com",
  projectId: "webmilsabores-406df",
  storageBucket: "webmilsabores-406df.firebasestorage.app",
  messagingSenderId: "750726666929",
  appId: "1:750726666929:web:a87542af6d7cc258e8e090",
  measurementId: "G-E9DRWTWT7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
