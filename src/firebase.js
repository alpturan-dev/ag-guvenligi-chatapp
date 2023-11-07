import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoOw57N9uyRktiIWx4RDS_sdxXKtN_hOM",
  authDomain: "chatapp-9a8e6.firebaseapp.com",
  projectId: "chatapp-9a8e6",
  storageBucket: "chatapp-9a8e6.appspot.com",
  messagingSenderId: "506840658597",
  appId: "1:506840658597:web:01645fd9715eec3305d34c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
