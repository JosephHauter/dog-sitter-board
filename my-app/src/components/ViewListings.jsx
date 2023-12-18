import React, { useState, useEffect } from 'react';
import "../styles/viewlisting.css"

const ViewListings = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => setUsers(data))
  .catch(error => console.error('Error:', error));

  }, []);

  console.log(users);
  return (
    <div className="view">
      {users.map(user => (
        <div key={user._id} className="posting">
          <div className="posting-inner-wrapper">
            <div className="posting-text">
              <h2 className="posting-name">{user.title}</h2>
              <p className="posting-location">Location: {user.location}</p>
              <p className="posting-description">{user.description}</p>
              <p className="posting-user"> Posted by: {user.name}</p>
            </div>
            {/* <img
              src={`${process.env.REACT_APP_SERVER_URL}/uploads/${user.image.filename}`}
              alt={user.name}
              className="posting-image"
            /> */}
          </div> 
        </div>
      ))}
    </div>
  );
};

export default ViewListings;
