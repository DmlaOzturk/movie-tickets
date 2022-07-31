// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOn7Da3S7E5dMoKWImoyPEslSTOrOra3E",
  authDomain: "movie-tickets-66532.firebaseapp.com",
  databaseURL: "https://movie-tickets-66532-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movie-tickets-66532",
  storageBucket: "movie-tickets-66532.appspot.com",
  messagingSenderId: "857499091274",
  appId: "1:857499091274:web:9a19927d86fa31b7e601b3",
  measurementId: "G-J9J2BRG700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);