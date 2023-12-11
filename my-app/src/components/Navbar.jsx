import React from 'react'; 
import "../styles/navbar.css";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../actions/authActions'; 
const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    dispatch(clearUser());
    // Optionally, redirect the user to the login page or home page
    // For example: history.push('/login');
    alert('Logout successful!');
  };
  return (
    <div className="navbar">
      <h1 className="navbar-name">
        <NavLink to="/" className="navbar-link" id="logo">(name)</NavLink>
      </h1>
      <div className="navbar-link-wrapper">
        <NavLink to="/viewlistings" className="navbar-link">Jobs</NavLink>
        {auth.user ? (
          // If the user is logged in, show logout button and user-specific links
          <>
            <NavLink to="/createpost" className="navbar-link">Create Post</NavLink>
            <button onClick={handleLogout} className="navbar-link">Logout</button>
          </>
        ) : (
          // If the user is not logged in, show login and signup links
          <>
            <NavLink to="/login" className="navbar-link">Log in</NavLink>
            <NavLink to="/signup" className="navbar-link" id="sign-up">Sign up</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;