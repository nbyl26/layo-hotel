import firebase from "firebase/app";
import "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAe_W9Zo8RXLf3h2F12Q1o6CnmBsGxHM6g",
  authDomain: "layo-hotel.firebaseapp.com",
  projectId: "layo-hotel",
  storageBucket: "layo-hotel.firebasestorage.app",
  messagingSenderId: "608838426136",
  appId: "1:608838426136:web:d2c208c79f9e84c88b2d6d",
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Mengakses Firestore
const db = firebase.firestore();

export { db };
