// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth(); 

  // If user is not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: window.location.pathname }} />;  }

  // If authenticated, return the children components
  return children;
};

export default ProtectedRoute;
