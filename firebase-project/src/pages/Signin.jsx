import React, { useState } from 'react'
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app);

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = () => {
        signInWithEmailAndPassword(
            auth,
            email,
            password
            ).then((value) => alert("Sign In Successfully"))
             .catch((err) => alert(err))
             setEmail("");
             setPassword("")
    }

  return (
    <div className='signin-page'>
        <label>Email</label>
        <input 
        type='email' 
        placeholder='Enter Your Email'
        value={email}
        onChange={e => setEmail(e.target.value)} 
        />

        <label>Password</label>
        <input
        type='password' 
        placeholder='Enter Your Password' 
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <button onClick={signinUser}>Sign In</button>
      
    </div>
  )
}

export default Signin
