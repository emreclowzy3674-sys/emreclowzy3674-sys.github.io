import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEbcaaZWnfkh8uAwIaaxN2_iBYzZjRZy8",
  authDomain: "shredderwebonline.firebaseapp.com",
  projectId: "shredderwebonline",
  storageBucket: "shredderwebonline.appspot.com",
  messagingSenderId: "797281674039",
  appId: "1:797281674039:web:492e2bcff8489f4ac830b2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
