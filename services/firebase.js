// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiDXWvgAjRhb2U8P0XOfCTDmPVhbs_d-Q",
    authDomain: "ntu-class-33304.firebaseapp.com",
    projectId: "ntu-class-33304",
    storageBucket: "ntu-class-33304.appspot.com",
    messagingSenderId: "143201629976",
    appId: "1:143201629976:web:eb12bdfaeffcd58bf9906d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

export { db, auth };