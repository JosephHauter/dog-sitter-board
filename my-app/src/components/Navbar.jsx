// Navbar.jsx
import "../styles/navbar.css";

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../actions/authActions';

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    dispatch(clearUser());
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div className="navbar">
      <h1 className="navbar-name">
        <NavLink to="/" className="navbar-link" id="logo">Woof Woof</NavLink>
      </h1>
      <div className="navbar-link-wrapper">
        {auth.user ? (
          <>
            <span className="navbar-link" id="welcome">Welcome, {auth.user.username}!</span>
            <NavLink to="/viewlistings" className="navbar-link">Jobs</NavLink>
            <NavLink to="/createpost" className="navbar-link">Create Post</NavLink>
            <button onClick={handleLogout} className="navbar-link" id="logout">Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/viewlistings" className="navbar-link">Jobs</NavLink>
            <NavLink to="/login" className="navbar-link">Log in</NavLink>
            <NavLink to="/signup" className="navbar-link" id="sign-up">Sign up</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
