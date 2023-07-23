import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCaKeop55zBfuN7UvC-JVuZBcZXtUrai8w",
    authDomain: "ecommerce-site-b963d.firebaseapp.com",
    projectId: "ecommerce-site-b963d",
    storageBucket: "ecommerce-site-b963d.appspot.com",
    messagingSenderId: "886872830683",
    appId: "1:886872830683:web:6d090174adb03579bf52fe",
    measurementId: "G-82T3C4KBKM"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };