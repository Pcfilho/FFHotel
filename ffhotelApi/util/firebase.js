// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUdF7k-yMBrLM99yoM8F4cjzqPgu8Tels",
  authDomain: "ffhotel-b34e1.firebaseapp.com",
  projectId: "ffhotel-b34e1",
  storageBucket: "ffhotel-b34e1.appspot.com",
  messagingSenderId: "844201063718",
  appId: "1:844201063718:web:b22f6050bbb4726c6ffde7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app