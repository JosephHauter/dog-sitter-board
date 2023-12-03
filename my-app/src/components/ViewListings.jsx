import React, { useState, useEffect } from 'react';
import "../styles/viewlisting.css"

const ViewListings = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="view">
      {users.map(user => (
        <div key={user._id}>
          <h2>{user.name}</h2> 
          <h3>{user.description}</h3>
          <img src={`http://localhost:5000/uploads/${user.image.filename}`} alt={user.name} />

        </div>
      ))}
    </div>
  );
};

export default ViewListings;



