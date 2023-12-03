// Login.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import "../styles/login_signup.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      console.log(response.data);

      // Assuming the server sends user information upon successful login
      if (response.data.success) {
        localStorage.setItem('loggedInUser', JSON.stringify(response.data.user));
        alert('Login successful!');
      } 
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  return (
    <div className="login-signup-page">
      <h2 className="login-signup-header">Log in to (name)</h2>
      <form>
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
        <button type="button" className="login-signup-button" onClick={handleLogin}>
          Log In
        </button>
      </form>
      <div className="login-signup-switch-wrapper">
        <span className="login-signup-switch-text">Don't have an account?</span>
        <NavLink to="../signup" className="login-signup-switch"> Register </NavLink>
        <span className="login-signup-switch-text">here.</span>
      </div>
    </div>
  );
};

export default Login;
