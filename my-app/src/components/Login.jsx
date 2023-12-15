import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import "../styles/login_signup.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isMounted, setIsMounted] = useState(true); // Track component mount state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [auth, setAuth] = useState({ user: null, error: null });

  useEffect(() => {
    // Component did mount
    return () => {
      // Component will unmount
      setIsMounted(false);
    };
  }, []);

  const handleLogin = async () => {
    try {
      const response = await dispatch(login(username, password));  
      if (response && response.success) {
        // User exists and login is successful
        setAuth(response);
        localStorage.setItem('loggedInUser', username);
        navigate('/dashboard');
      } else {
        // User does not exist or login failed
        setAuth({ ...auth, error: 'User does not exist. Please register.' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setAuth({ ...auth, error: 'An error occurred during login. Please try again.' });
    }
  };

  // Redirect if logged in
  useEffect(() => {
    if (auth.user && isMounted) {
      navigate('/dashboard'); 
    }
  }, [auth.user, isMounted, navigate]);

  return (
    <div className="login-signup-page">
      <h2 className="login-signup-header">Log in to (name)</h2>
      {auth.error && <p className="error">{auth.error}</p>}
      <form onSubmit={(e) => e.preventDefault()}>
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
        <button type="submit" className="login-signup-button" onClick={handleLogin}>
          Log In
        </button>
      </form>
      <div className="login-signup-switch-wrapper">
        <span className="login-signup-switch-text">Don't have an account?</span>
        <NavLink to="/signup" className="login-signup-switch"> Register </NavLink>
        <span className="login-signup-switch-text">here.</span>
      </div>
    </div>
  );
};

export default Login;
