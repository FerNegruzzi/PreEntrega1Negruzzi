// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDToNjt23fJj1j6AWwg2nGKOmRSGslmOtU",
  authDomain: "impossibleskateshop-f4382.firebaseapp.com",
  projectId: "impossibleskateshop-f4382",
  storageBucket: "impossibleskateshop-f4382.appspot.com",
  messagingSenderId: "551827851104",
  appId: "1:551827851104:web:a76e59cbc3582e89480005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);