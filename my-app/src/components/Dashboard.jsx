/**
 * Dashboard.jsx
 * Users will be redirected to the dashboard page after logging in. This displays the user's profile.
 */

import { React, useState } from 'react';
import { useSelector } from 'react-redux'; 
import axios from 'axios'; 
import "../styles/dashboard.css";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmail, setEditedEmail] = useState(auth.email);
  const [editedBio, setEditedBio] = useState(auth.bio);

  const handleEdit = async () => {
    try {
      // Make an API request to update user information
      const response = await axios.put('http://localhost:5000/updateprofile', {
        email: editedEmail,
        bio: editedBio,
      });

      console.log(response.data);

      // Close the editing mode after successful update
      setIsEditing(false);
    } catch (error) {
      console.error('Error during profile update:', error);
    }
  }; 

  return (
    <div className="dashboard">
      <div className="welcome-wrapper">
        <div className="dashboard-image"></div>
        <p className="welcome">Welcome to your dashboard, {auth.user}!</p>
      </div>
      <div className="dashboard-feature-wrapper">
        <div className="dashboard-feature" id="profile">
          <p className="feature-titles" id="profile-title">Profile</p>
          <img src="">{/** PROFILE IMAGE HERE */}</img>
          <p className="feature-text" id="profile-text">Username: {auth.user}</p>
          {isEditing ? (
            <>
              <input
                type="text"
                placeholder="Email"
                value={editedEmail || ''}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Bio"
                value={editedBio || ' '}
                onChange={(e) => setEditedBio(e.target.value)}
              />
            </>
          ) : (
            <>
              <p className="feature-text" id="profile-text">Email: {auth.email}</p>
              <p className="feature-text" id="profile-text">Bio: {auth.bio}</p>
            </>
          )}
          {isEditing ? (
            <button onClick={handleEdit}>Save Changes</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
