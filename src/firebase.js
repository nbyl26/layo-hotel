import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCvspa_t_qbGKFP7Cd21pmOJ_KLa2YKsLY",
  authDomain: "layo-hotel-153a5.firebaseapp.com",
  projectId: "layo-hotel-153a5",
  storageBucket: "layo-hotel-153a5.firebasestorage.app",
  messagingSenderId: "1008501303275",
  appId: "1:1008501303275:web:7ef87923f807475d675bae",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Mengakses Firestore
const db = getFirestore(app);

export { db, addDoc, collection, getDocs};
