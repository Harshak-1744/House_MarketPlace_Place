import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyA-ClnvgwjPTnnI6aOPuZtf8q01B5mVvvE",
  authDomain: "house-marketplace-app-3ad3c.firebaseapp.com",
  projectId: "house-marketplace-app-3ad3c",
  storageBucket: "house-marketplace-app-3ad3c.appspot.com",
  messagingSenderId: "653142047284",
  appId: "1:653142047284:web:213bbf1836f4c2d1e2e861"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()