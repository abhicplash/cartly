import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Page Not Found</h2>
      <p className="notfound-message">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button onClick={() => navigate("/")} className="notfound-btn">
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
