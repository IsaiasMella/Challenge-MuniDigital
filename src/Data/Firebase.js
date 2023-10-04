import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcD8IT9VljOJT4KOAfw6QY8UEXS5th6GM",
  authDomain: "challenge-munidigital.firebaseapp.com",
  projectId: "challenge-munidigital",
  storageBucket: "challenge-munidigital.appspot.com",
  messagingSenderId: "58886086701",
  appId: "1:58886086701:web:820cd6093a050658ecd8a4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
