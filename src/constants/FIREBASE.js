import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd0wzfSKFsgxDg1Ea-k7t-j9L69R51UF0",
  authDomain: "attendance-v6.firebaseapp.com",
  projectId: "attendance-v6",
  storageBucket: "attendance-v6.appspot.com",
  messagingSenderId: "968273207869",
  appId: "1:968273207869:web:d30afac2f2779d2b924054"
};

export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore();

