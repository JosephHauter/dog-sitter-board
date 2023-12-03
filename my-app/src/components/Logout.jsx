import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
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
