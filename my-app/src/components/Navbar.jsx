/**
 * Navbar.jsx
 * The navbar appears on every page. 
 * When the user is not logged in, the navbar will only show the log in, sign up, and jobs buttons.
 * After the user signs in, the navbar will no longer have the log in and sign up buttons, but the create post and signout buttons.
 */ 
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
    // Redirect to the login page after logout
    navigate('/login'); 
  };

  return (
    <div className="navbar">
      <h1 className="navbar-name">
        <NavLink to="/" className="navbar-link" id="logo">Woof Woof</NavLink>
      </h1>
      <div className="navbar-link-wrapper">
        {auth.user ? (
          <>
            <span className="navbar-link" id="welcome">Welcome, {auth.user}!</span>
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
