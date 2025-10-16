// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOt2IqLjPENknwJ30npuGuyKgZ-IHW3-Q",
    authDomain: "fir-app-1s.firebaseapp.com",
    projectId: "fir-app-1s",
    storageBucket: "fir-app-1s.firebasestorage.app",
    messagingSenderId: "709903974827",
    appId: "1:709903974827:web:8fa7977da9a0bc5a2f12ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);