// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNn818nS1CgY5258PAyzHX_hKZj1rtWiI",
  authDomain: "firbase-9f2a4.firebaseapp.com",
  projectId: "firbase-9f2a4",
  storageBucket: "firbase-9f2a4.appspot.com",
  messagingSenderId: "292526815273",
  appId: "1:292526815273:web:33c80708e90f5d8c984438",
  databaseURL: "https://firbase-9f2a4-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

