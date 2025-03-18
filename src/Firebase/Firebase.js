// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8tnKWeYceB95bfdJtO8y_o6vYK-PltTs",
  authDomain: "simple-login-auth-32584.firebaseapp.com",
  projectId: "simple-login-auth-32584",
  storageBucket: "simple-login-auth-32584.firebasestorage.app",
  messagingSenderId: "399736483950",
  appId: "1:399736483950:web:13d5fbc823c8b49d57b67f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export { auth };