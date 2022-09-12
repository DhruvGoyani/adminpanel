// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
<<<<<<< HEAD
import getStorage from "redux-persist/es/storage/getStorage";
=======
import { getStorage } from "firebase/storage";
>>>>>>> 081b545d02da7138e8ef7a572f73b5d4b53c574b
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyA9fBcFu-cnUoDQy8-3EGqgS7sI0X-gwhw",
  authDomain: "medicine-fcbd0.firebaseapp.com",
  projectId: "medicine-fcbd0",
  storageBucket: "medicine-fcbd0.appspot.com",
  messagingSenderId: "65154780977",
  appId: "1:65154780977:web:926ac9d2f68b1440e6ea10",
  measurementId: "G-9QCZ8W4JC2"
=======
  apiKey: "AIzaSyCGZAFx1EheBH_aLRKlFPpR-mTNk-pNpJ8",
  authDomain: "admin-medicine.firebaseapp.com",
  projectId: "admin-medicine",
  storageBucket: "admin-medicine.appspot.com",
  messagingSenderId: "318431352105",
  appId: "1:318431352105:web:0aa03ca8f50d572e979338",
  measurementId: "G-29E8C4QSZJ"
>>>>>>> 081b545d02da7138e8ef7a572f73b5d4b53c574b
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
