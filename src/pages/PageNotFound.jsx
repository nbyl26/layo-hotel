import React from "react";
import { Link } from "react-router-dom";
import "../styles/404.css";

const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="container">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Oops! Page Not Found</h2>
        <p className="error-text">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="error-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
