// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app"; // Import Firebase
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6zqxomxRJMZV5-4w6YEkyQxx6egCBAi8",
  authDomain: "my-wardrobe-a6a16.firebaseapp.com",
  projectId: "my-wardrobe-a6a16",
  storageBucket: "my-wardrobe-a6a16.appspot.com",
  messagingSenderId: "675567339819",
  appId: "1:675567339819:web:4ab5a9140c1d2615c1dd6e",
  measurementId: "G-B7CRJE41V2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { auth, provider, storage };
