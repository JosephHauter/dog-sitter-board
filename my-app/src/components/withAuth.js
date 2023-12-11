import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const auth = useSelector((state) => state.auth);

    if (!auth.user) {
      // If the user is not logged in, redirect to the login page
      return <Navigate to="/login" />;
    }

    // If the user is logged in, render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
