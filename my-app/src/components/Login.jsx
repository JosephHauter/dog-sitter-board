import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions'; 
import "../styles/login_signup.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(username, password));
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
