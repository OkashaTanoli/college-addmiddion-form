// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmvk-Qk_V0c0SCtd-4Bfe_miNZ_cQjGgs",
  authDomain: "fg-college-admission-form.firebaseapp.com",
  databaseURL: "https://fg-college-admission-form-default-rtdb.firebaseio.com",
  projectId: "fg-college-admission-form",
  storageBucket: "fg-college-admission-form.appspot.com",
  messagingSenderId: "207174409733",
  appId: "1:207174409733:web:0cc7a1e5469944b20f466c",
  measurementId: "G-E39S530SMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
