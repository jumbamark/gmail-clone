// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdKaBpG7eAo97TTz326EyuT7HYN1S0EAY",
  authDomain: "clone-b2466.firebaseapp.com",
  projectId: "clone-b2466",
  storageBucket: "clone-b2466.appspot.com",
  messagingSenderId: "658372004302",
  appId: "1:658372004302:web:1285deefe98ae7945c439f",
};

// Initialize Firebase
// what connects the frontend to the backend
const firebaseApp = initializeApp(firebaseConfig);

// Getting our db from our code
const db = getFirestore(firebaseApp);

// Authentication module
const auth = getAuth(firebaseApp);

// Google provider - for logging in
const provider = new GoogleAuthProvider();

export {db, auth, provider};
