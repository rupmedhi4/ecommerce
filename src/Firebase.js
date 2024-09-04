import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCkIWyc1mXI50pP5hPTO91_GTwM8qSXyvs",
  authDomain: "ecom-79978.firebaseapp.com",
  databaseURL: "https://ecom-79978-default-rtdb.firebaseio.com",
  projectId: "ecom-79978",
  storageBucket: "ecom-79978.appspot.com",
  messagingSenderId: "418127279983",
  appId: "1:418127279983:web:e0ae43d07995fc10cbda9a",
  measurementId: "G-STBWNCCHL4"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };