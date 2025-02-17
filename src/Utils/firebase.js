// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPI-Je8sHJXxlQhi484-GBSwFGtjtvHlc",
  authDomain: "netflix-gpt-87a66.firebaseapp.com",
  projectId: "netflix-gpt-87a66",
  storageBucket: "netflix-gpt-87a66.firebasestorage.app",
  messagingSenderId: "70488779022",
  appId: "1:70488779022:web:16dce7ab61d80975958f5f",
  measurementId: "G-0F47E0XF25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);