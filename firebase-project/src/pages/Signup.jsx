import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';  

const auth = getAuth(app);
const googleProvide = new GoogleAuthProvider();

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(
      auth,
      email,
      password
      ).then(value => alert('Success'))
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvide);
  }
  return (
    <div className='Signup-page'>
      <label>Email</label>
      <input onChange={e => setEmail(e.target.value)} value={email} type='email' required placeholder='Enter your email here' />
      <label>Password</label>
      <input onChange={e => setPassword(e.target.value)} value={password} type='password' required placeholder='Enter your password here' />
      <button onClick={signUpWithGoogle}>Signin with Google</button>
      <button onClick={createUser}>Sign Up</button>
    </div>
  )
}

export default Signup
