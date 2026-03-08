import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import '../styles/NotFound.css';


// This page renders when no route matches (the path="*" route in App.js)

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="container notfound">
        <div className="notfound__code">404</div>
        <h1 className="notfound__title">Page not found</h1>
        <p className="notfound__text">
          Looks like this page got eaten. 🍕
        </p>
        <button className="btn-primary" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;