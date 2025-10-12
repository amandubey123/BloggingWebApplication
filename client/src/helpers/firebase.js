// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEnv } from "./getEnv";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEnv('VITE_FIREBASE_API'),
  authDomain: "mern-blog-25b49.firebaseapp.com",
  projectId: "mern-blog-25b49",
  storageBucket: "mern-blog-25b49.firebasestorage.app",
  messagingSenderId: "1005788179588",
  appId: "1:1005788179588:web:c829616d440f7edf96a6d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider}