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

// Function to convert ArrayBuffer to base64
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export default ViewListings;



