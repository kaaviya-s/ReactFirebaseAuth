import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../firebase.config';

const Login = () => {
  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();
    const handleLogin =async () =>{
      try {
        await signInWithEmailAndPassword(firebaseAuth,email,password);
      } catch (error) {
        console.log(error);
      }
    }
    onAuthStateChanged(firebaseAuth , (currentUser)=>{
      if(currentUser){
        navigate("/");
      }
    })
  return (
    <section className='signupAndLogin'>
        <div className="container">
            <h1>Login</h1>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div className="button">
                <button onClick={handleLogin}>Login</button>
                <span>Don't have an account? <Link to="/signup">Signup</Link></span>                
            </div>
        </div>
    </section>
  )
}

export default Login