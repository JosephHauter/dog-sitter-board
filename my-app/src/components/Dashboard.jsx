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
        <h1 className="welcome">Welcome to your dashboard, {auth.user}!</h1>
      </div>
      <div className="dashboard-feature-wrapper">
        <div className="dashboard-feature" id="profile">
          <p className="feature-titles" id="profile-title">Profile</p>
          <p className="feature-text" id="profile-text"><b>Username:</b> {auth.user}</p>
          <p className="feature-text" id="profile-text"><b>Email:</b> {auth.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
