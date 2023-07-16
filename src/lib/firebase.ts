// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsVajf0VC_pMa8f4pSF-laU_VOXepfXKo",
  authDomain: "book-trekker-3b089.firebaseapp.com",
  projectId: "book-trekker-3b089",
  storageBucket: "book-trekker-3b089.appspot.com",
  messagingSenderId: "755450963906",
  appId: "1:755450963906:web:e38528f02ff5d691f9585b",

  // apiKey: import.meta.env.API_KEY,
  // authDomain: import.meta.env.AUTH_DOMAIN,
  // projectId: import.meta.env.PROJECT_ID,
  // storageBucket: import.meta.env.STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  // appId: import.meta.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
