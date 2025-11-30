import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyDYzFTRGuYD2103lA-mI1IY039bY5M7TZM",
  authDomain: "ecommerce-web-cf49b.firebaseapp.com",
  projectId: "ecommerce-web-cf49b",
  storageBucket: "ecommerce-web-cf49b.firebasestorage.app",
  messagingSenderId: "542510500810",
  appId: "1:542510500810:web:98213dac8cbad69e9b1d33",
  measurementId: "G-C56ZPE55NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth & Firestore agar bisa dipakai di file lain
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;