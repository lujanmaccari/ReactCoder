import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBaJ_en9pIz5VHs7SKzNPmSjgVRTRPoMgw",
  authDomain: "reactjs-437cb.firebaseapp.com",
  projectId: "reactjs-437cb",
  storageBucket: "reactjs-437cb.appspot.com",
  messagingSenderId: "1094858621942",
  appId: "1:1094858621942:web:dd808823cbbc40412d7dd7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)