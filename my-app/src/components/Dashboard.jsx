import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard, {auth.user.username}!</h1>
      {/* Add more dashboard features here */}
    </div>
  );
};

export default Dashboard;
