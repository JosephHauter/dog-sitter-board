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
        <div key={user._id} className="posting">
          <div className="posting-inner-wrapper">
            <h2 className="posting-name">{user.name}</h2>
            <img
              src={`http://localhost:5000/uploads/${user.image.filename}`}
              alt={user.name}
              className="posting-image"
            />
          </div> 
        </div>
      ))}
    </div>
  );
};

export default ViewListings;



