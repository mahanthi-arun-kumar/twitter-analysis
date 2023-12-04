import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpf_iB7mHUObkdDfAdda8f84Df8wVqpdE",
  authDomain: "assignment-autentication.firebaseapp.com",
  projectId: "assignment-autentication",
  storageBucket: "assignment-autentication.appspot.com",
  messagingSenderId: "278842864134",
  appId: "1:278842864134:web:186a990a389e34c5154987",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
