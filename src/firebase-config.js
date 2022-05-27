import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBwJ2xQYeRbFXzHyAsET_5J4880YkDvwZE",
  authDomain: "new-crud-724f5.firebaseapp.com",
  projectId: "new-crud-724f5",
  storageBucket: "new-crud-724f5.appspot.com",
  messagingSenderId: "200893780232",
  appId: "1:200893780232:web:1f871d34a6d17e3b569cbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
