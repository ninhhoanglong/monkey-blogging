import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAzsoCzKLPu1IKzktKQ8t9lzwuvoQDqgtM",
  authDomain: "monkey-blogging-aa2d6.firebaseapp.com",
  projectId: "monkey-blogging-aa2d6",
  storageBucket: "monkey-blogging-aa2d6.appspot.com",
  messagingSenderId: "806811310646",
  appId: "1:806811310646:web:c920ced04c6daeed15d697",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
