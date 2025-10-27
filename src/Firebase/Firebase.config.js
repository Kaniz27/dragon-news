// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMohYGO5TIqNVK8HXr1pgdRvfytxPnTC0",
  authDomain: "dragon-news-breaking-e83f3.firebaseapp.com",
  projectId: "dragon-news-breaking-e83f3",
  storageBucket: "dragon-news-breaking-e83f3.firebasestorage.app",
  messagingSenderId: "565387261838",
  appId: "1:565387261838:web:0f5345a7c18e6ac4bf16df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);