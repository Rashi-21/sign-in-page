// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsLBv3H3IWKENUmuwWbbWillbI557Fjho",
    authDomain: "login-page-1-933f0.firebaseapp.com",
    databaseURL: "https://login-page-1-933f0-default-rtdb.firebaseio.com",
    projectId: "login-page-1-933f0",
    storageBucket: "login-page-1-933f0.appspot.com",
    messagingSenderId: "855793709251",
    appId: "1:855793709251:web:cc7dcf5eb68496eb963276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);