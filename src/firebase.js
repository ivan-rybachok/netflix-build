// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCTQzoX1ZmTddetdFGyENxOxg2FjN2RC8",
  authDomain: "netflix-clone-150f5.firebaseapp.com",
  projectId: "netflix-clone-150f5",
  storageBucket: "netflix-clone-150f5.appspot.com",
  messagingSenderId: "527755594375",
  appId: "1:527755594375:web:2d01a8b0529f3dcdc24622",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
