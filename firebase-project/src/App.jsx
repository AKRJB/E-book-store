import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { app } from './firebase'
import './App.css'
import Signin from "./pages/Signin";
import Signup from "./pages/signup";
import { useEffect, useState } from "react";


const auth = getAuth(app);

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user);
      }else {
        setUser(null)
      }
    })
  },[])

  if(user === null) {
    return (
      <div>
      <h1>Sign-Up Page</h1>
      <Signup />

      <h1>Sign-In Page</h1>
      <Signin />
    </div>
    )
  } else{
    return (
      <div>
        <p>Welcome into the Firebase Authentication {user.email}</p>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    )
  }
}

export default App
