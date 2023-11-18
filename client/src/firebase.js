// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d4be3.firebaseapp.com",
  projectId: "mern-estate-d4be3",
  storageBucket: "mern-estate-d4be3.appspot.com",
  messagingSenderId: "854713108649",
  appId: "1:854713108649:web:abf29aa4913dcbee0b81b8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
