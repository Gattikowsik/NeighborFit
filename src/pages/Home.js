import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const [query, setQuery] = useState('');
  const [allNeighborhoods, setAllNeighborhoods] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleLogout = () => {
    const name = localStorage.getItem('username');
    localStorage.removeItem('username');
    toast.info(`${name} logged out`);
    navigate('/');
  };

  useEffect(() => {
    fetch('https://neighborfit-backend-k0cm.onrender.com/api/neighborhoods')
      .then(res => res.json())
      .then(data => {
        setAllNeighborhoods(data); // Store full objects
      })
      .catch(err => {
        console.error('Failed to fetch neighborhoods', err);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = allNeighborhoods.filter(n =>
      n.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(value ? filtered : []);
  };

  const handleSelect = (neighborhood) => {
    setQuery(neighborhood.name);
    setSuggestions([]);
    navigate(`/neighborhood/${neighborhood.id}`);
  };

  const handleSearch = () => {
    const match = allNeighborhoods.find(n =>
      n.name.toLowerCase() === query.trim().toLowerCase()
    );

    if (match) {
      navigate(`/neighborhood/${match.id}`);
    } else {
      toast.error('Neighborhood not found!');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <div className="home-container">
      <ToastContainer theme="colored" autoClose={2500} />
      {username && (
        <div className="welcome-bar">
          <div className="welcome-left">
            👋 Hi, <strong>{username}</strong>! <span>Welcome back to NeighborFit.</span>
          </div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      )}

      <section className="hero-banner">
        <div className="overlay">
          <h1 className="banner-title">Let Your Preferences Guide You Home.</h1>
          <div className="banner-search">
            <input
              type="text"
              placeholder="Enter Neighborhood in Bangalore..."
              value={query}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>🔍</button>
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((n, i) => (
                  <li key={i} onClick={() => handleSelect(n)}>
                    {n.name}
                  </li>
                ))}
              </ul>
            )}

          </div>
        </div>
      </section>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Find Your Ideal Neighborhood in Bangalore</h1>
            <p>NeighborFit uses your preferences to match you with the best places to live.</p>
            <Link to="/Signup" className="start-button">Get Started</Link>
          </div>
          <div className="hero-image">
            <img src="/assets/Homeview.jpg" alt="Bangalore neighborhood" />
          </div>
        </div>
      </section>

      <div className="info-sections">
        <section className="info-card">
          <h2>How It Works</h2>
          <ul>
            <li>📝 Answer 7 quick lifestyle questions</li>
            <li>📊 View your top neighborhood matches</li>
            <li>🏙️ Explore details and choose confidently</li>
          </ul>
        </section>

        <section className="info-card">
          <h2>Why Choose NeighborFit?</h2>
          <ul>
            <li>🎯 Personalized neighborhood suggestions</li>
            <li>🌱 Liveability based on safety, greenery, transport, and more</li>
            <li>📊 Simple and transparent match scoring</li>
          </ul>
        </section>
      </div>

      <section className="popular-areas">
        <h2>🔥 Popular Neighborhoods in Bangalore</h2>
        <div className="area-grid">
          <div className="area-card">🏙️ Indiranagar</div>
          <div className="area-card">🌳 Jayanagar</div>
          <div className="area-card">🚲 HSR Layout</div>
          <div className="area-card">💻 Electronic City</div>
          <div className="area-card">☕ Whitefield</div>
          <div className="area-card">🌆Koramangala</div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>🎯 Ready to find your perfect neighborhood match?</h2>
          <p>It takes less than a minute to get personalized recommendations tailored to your lifestyle.</p>
          <Link to="/questionnaire" className="start-button">🚀 Start Questionnaire</Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <p>© 2025 <strong>NeighborFit</strong>. All rights reserved.</p>
          <p>
            Made with <span className="heart">❤️</span> by
            <a href="https://github.com/Gattikowsik" target="_blank" rel="noopener noreferrer"> Kowsik Gatti</a>
          </p>

          <div className="footer-socials">
            <a href="https://github.com/Gattikowsik/NeighborFit" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/gattikowsik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑ Back to Top
          </button>
        </div>
      </footer>

    </div>
  );
};

export default Home;