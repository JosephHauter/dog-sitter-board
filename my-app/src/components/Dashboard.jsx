/**
 * Dashboard.jsx
 * Users will be redirected to the dashboard page after logging in. This displays the user's profile.
 */

import React from 'react';
import { useSelector } from 'react-redux';
import "../styles/dashboard.css";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth); 
  console.log(auth)
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
          <p className="feature-text" id="profile-text">Email: {auth.email}</p>
          <p className="feature-text" id="profile-text">Bio: {auth.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
