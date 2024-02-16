import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import User from './components/User';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
