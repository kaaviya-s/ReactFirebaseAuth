import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../firebase.config';

const User = () => {
  const [user,setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth , (currentUser)=>{
    if(currentUser){
      setUser(currentUser);
    }
    else{ navigate("/login")}
  });

  return (
    <section className="signupAndLogin">
      <div className="container">
        <h1>Welcome {user?.email} </h1>
        <button onClick={() =>{signOut(firebaseAuth)}}>Sign Out</button>
      </div>
    </section>
  )
}

export default User