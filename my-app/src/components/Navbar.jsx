import React from 'react'; 
import "../styles/navbar.css";
import { NavLink } from 'react-router-dom';
import { FaSearch, FaPaw } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <h1 className="navbar-name">
        <NavLink to="/"  className="navbar-link" id="logo"><FaPaw />(name)</NavLink>
      </h1>
      {/* <div className="navbar-searchbar">
        <input type="text" placeholder='Search' className="navbar-search-input" />
        <button className="navbar-search-button"><FaSearch /></button>
      </div> */}
      <div className="navbar-link-wrapper">
        <NavLink to="/viewlistings" className="navbar-link">Jobs</NavLink>
        <NavLink to="/login" className="navbar-link">Log in</NavLink>
        <NavLink to="/signup" className="navbar-link" id="sign-up">Sign up</NavLink>

         {/* <NavLink to="/" className="navbar-link">Messages</NavLink> */}
         {/* <NavLink to="/" className="navbar-link">Profile</NavLink> */}
        <NavLink to="/createpost" className="navbar-link">Create Post</NavLink>
      </div>
    </div>
    </>
  )
}

export default Navbar