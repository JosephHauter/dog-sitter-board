/**
 * Logout.jsx
 * Users will be logged out of their account with a press of a buton.
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '../actions/authActions'; 

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    dispatch(clearUser());
    
    alert('Logout successful!');
  };

  return (
    <div>
      <h2>Welcome, {JSON.parse(localStorage.getItem('loggedInUser'))?.username}</h2>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
