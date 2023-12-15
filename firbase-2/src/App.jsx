import { useState } from 'react'
import './App.css'
import { useFirebase } from './context/firebaseContext'


function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useFirebase();

  const createUser = () => {
    signup(
      email,
      password
      ).then(value => alert('Success'))
       .catch(err => alert(err))
  }

  return (
   <div>
    <h3>Firebase Signup form</h3>
    <input
     type='email'
     placeholder='Enter Email'
     value={email}
     onChange={e => setEmail(e.target.value)}
     />
     <input
     type='password'
     placeholder='Enter Password'
     value={password}
     onChange={e => setPassword(e.target.value)}
     />
     <button onClick={createUser}>Signup</button>
   </div>
  )
}

export default App
