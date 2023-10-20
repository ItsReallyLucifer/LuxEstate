// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "luxestate-7a35e.firebaseapp.com",
  projectId: "luxestate-7a35e",
  storageBucket: "luxestate-7a35e.appspot.com",
  messagingSenderId: "291241655543",
  appId: "1:291241655543:web:2e6c5afeb87841e20527f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);