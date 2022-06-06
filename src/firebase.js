// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0d4L_AaJ0NX5TnBcVTqWlD4tKjKe_C_M",
  authDomain: "nextjs-au.firebaseapp.com",
  databaseURL: "https://nextjs-au-default-rtdb.firebaseio.com",
  projectId: "nextjs-au",
  storageBucket: "nextjs-au.appspot.com",
  messagingSenderId: "28872013054",
  appId: "1:28872013054:web:ff66fe3c89f61ebdb3e1af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app



