import React from 'react'; 
import "./header.css";
import { FaSearch, FaHome, FaBriefcase, FaEnvelope, FaUser, FaPlusSquare} from "react-icons/fa";

const Header = () => {
  /** Might change the links from a to some component */
  return ( 
    <div className="navbar">
      <h1 className="navbar-name">Name</h1>
      <div className="navbar-searchbar">
        <input type="text" placeholder='Search' className="navbar-search-input" />
        <button className="navbar-search-button"><FaSearch /></button>
      </div>
      <div className="navbar-link-wrapper">
        <a href="" className="navbar-link">
          <FaHome className="icon" /><br />Home</a>
        <a href="" className="navbar-link">
          <FaBriefcase className="icon" /><br />Jobs</a>
        <a href="" className="navbar-link">
          <FaEnvelope className="icon" /><br />Messages</a>
        <a href="" className="navbar-link">
          <FaUser className="icon"/><br />Profile</a>
        <a href="" className="navbar-link">
          <FaPlusSquare className="icon" /><br />Create Post</a>
      </div>
    </div>
  )
}

export default Header;