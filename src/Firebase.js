// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA9fBcFu-cnUoDQy8-3EGqgS7sI0X-gwhw",
  authDomain: "medicine-fcbd0.firebaseapp.com",
  projectId: "medicine-fcbd0",
  storageBucket: "medicine-fcbd0.appspot.com",
  messagingSenderId: "65154780977",
  appId: "1:65154780977:web:926ac9d2f68b1440e6ea10",
  measurementId: "G-9QCZ8W4JC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
