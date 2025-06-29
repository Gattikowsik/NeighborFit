import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>🏙️ Welcome to NeighborFit</h1>
        <p>
          Discover your perfect neighborhood in Bangalore based on your lifestyle preferences.
        </p>
        <Link to="/questionnaire">
          <button className="start-button">Start Matching</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
