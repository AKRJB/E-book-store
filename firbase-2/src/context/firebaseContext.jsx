import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNn818nS1CgY5258PAyzHX_hKZj1rtWiI",
  authDomain: "firbase-9f2a4.firebaseapp.com",
  projectId: "firbase-9f2a4",
  storageBucket: "firbase-9f2a4.appspot.com",
  messagingSenderId: "292526815273",
  appId: "1:292526815273:web:33c80708e90f5d8c984438",
  databaseURL: "https://firbase-9f2a4-default-rtdb.firebaseio.com"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const login = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  return (
    <FirebaseContext.Provider value={{ login, signup }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  return useContext(FirebaseContext);
};
