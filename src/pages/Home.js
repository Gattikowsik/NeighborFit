import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a CSS file for styling
const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Find Your Ideal Neighborhood in Bangalore</h1>
        <p>NeighborFit matches your lifestyle with the perfect area to live.</p>
        <Link to="/questionnaire" className="start-button">Get Started</Link>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Answer 7 quick lifestyle questions</li>
          <li>View your top neighborhood matches</li>
          <li>Explore detailed info and make smart moves</li>
        </ol>
      </section>

      <section className="benefits">
        <h2>Why Choose NeighborFit?</h2>
        <ul>
          <li>🎯 Personalized neighborhood suggestions</li>
          <li>🌱 Liveability based on safety, greenery, transport, and more</li>
          <li>📊 Simple and transparent match scoring</li>
        </ul>
      </section>

      <section className="popular-areas">
        <h2>Popular Neighborhoods</h2>
        <div className="area-grid">
          <div className="area-card">Indiranagar</div>
          <div className="area-card">Koramangala</div>
          <div className="area-card">Jayanagar</div>
          <div className="area-card">HSR Layout</div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to find your perfect match?</h2>
        <Link to="/questionnaire" className="start-button">Start Questionnaire</Link>
      </section>
    </div>
  );
};

export default Home;
