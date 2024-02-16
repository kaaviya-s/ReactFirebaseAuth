import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './signup.css'; 
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {firebaseAuth} from '../firebase.config';

const Signup = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();
    const handleSignUp =async () =>{
      try {
        await createUserWithEmailAndPassword(firebaseAuth,email,password);
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
            <h1>Signup</h1>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div className="button">
                <button onClick={handleSignUp}>Signup</button>
                <span>Already have an account? <Link to="/login">Login</Link></span>                
            </div>
        </div>
    </section>
  )
}

export default Signup