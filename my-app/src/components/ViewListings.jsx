import React, { useState, useEffect } from 'react';

const ViewListings = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:5000/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error:', error));
    }, []);
  
    return (
      <div className="View">
        {users.map(user => (
          <div key={user._id}>
            <h2>{user.name}</h2>
            <p>{user.about}</p>
          </div>
        ))}
      </div>
    );
}

export default ViewListings;