// Loading.js
import React from "react";
import "./Loading.css"; // Optional, for custom styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading, please wait...</p>
    </div>
  );
};

export default Loading;
