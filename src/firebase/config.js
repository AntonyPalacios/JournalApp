// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABlncB0PGzN8Cr6nojm_jGBiX6fI0GmD0",
    authDomain: "react-curso-8e864.firebaseapp.com",
    projectId: "react-curso-8e864",
    storageBucket: "react-curso-8e864.firebasestorage.app",
    messagingSenderId: "246484138583",
    appId: "1:246484138583:web:145bc6067b3a68e0660112"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);