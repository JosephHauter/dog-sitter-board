// Register.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import "../styles/login_signup.css";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const [email, setEmail] = useState(''); 

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        username, 
        email, 
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="login-signup-page">
      <h2 className="login-signup-header">Create an Account</h2>
      <form>
        <input
          type="text"
          placeholder="Email"
          className="login-signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> 
        <input
          type="text"
          placeholder="Username"
          className="login-signup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> 
        <br /> 
        <input
          type="password"
          placeholder="Password"
          className="login-signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />      
        <br />
        <button type="button" onClick={handleRegister} className="login-signup-button">
          Sign Up
        </button>
      </form>
      <div className="login-signup-switch-wrapper">
        <span className="login-signup-switch-text">Already have an account? </span>
        <NavLink to="../login" className="login-signup-switch"> Sign in </NavLink>
        <span className="login-signup-switch-text">here.</span>
      </div>
    </div>
  );
};

export default Register;
