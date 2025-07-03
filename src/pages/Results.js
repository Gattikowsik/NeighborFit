import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NeighborhoodCard from '../components/NeighborhoodCard';
import './Results.css';

const Results = () => {
  const [matches, setMatches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 5;

  const location = useLocation();

  useEffect(() => {
    const storedPrefs = localStorage.getItem('userPreferences');
    const searchedNeighborhood = localStorage.getItem('searchedNeighborhood');

    // If coming from search, fetch by neighborhood name
    if (searchedNeighborhood) {
      fetch(`http://localhost:5000/api/neighborhoods/search/${searchedNeighborhood}`)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch search result');
          return res.json();
        })
        .then(data => {
          console.log('🔍 Search result:', data);
          setMatches(data ? [data] : []);
          localStorage.removeItem('searchedNeighborhood'); // cleanup
        })
        .catch(err => {
          console.error('❌ Error fetching searched neighborhood:', err);
        });
    }
    // Else match using preferences
    else if (storedPrefs) {
      const userPrefs = JSON.parse(storedPrefs);
      console.log("📦 Sending preferences to backend:", userPrefs);

      fetch('http://localhost:5000/api/neighborhoods/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userPrefs),
      })
        .then(res => {
          if (!res.ok) throw new Error("Failed to fetch matches");
          return res.json();
        })
        .then(data => {
          console.log("✅ Received matches:", data);
          setMatches(data);
        })
        .catch(err => {
          console.error("❌ Error fetching match results:", err);
        });
    } else {
      console.warn("⚠️ No preferences or search term found.");
    }
  }, [location]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - cardsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + cardsPerPage, matches.length - cardsPerPage)
    );
  };

  const visibleMatches = matches.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div className="results">
      <h2 style={{ textAlign: 'center' }}>Top Matching Neighborhoods for You</h2>

      <div className="match-range">
        Showing {matches.length === 0 ? 0 : currentIndex + 1}–
        {Math.min(currentIndex + cardsPerPage, matches.length)} of {matches.length}
      </div>

      {matches.length === 0 ? (
        <p style={{ textAlign: 'center' }}>
          No data found. Please <Link to="/questionnaire">take the questionnaire</Link> or search again.
        </p>
      ) : (
        <>
          <div className="carousel-wrapper">
            <button
              onClick={handlePrev}
              className="carousel-arrow"
              disabled={currentIndex === 0}
              aria-label="Previous"
            >
              ‹
            </button>

            <div className="results-grid">
              {visibleMatches.map((n) => (
                <NeighborhoodCard key={n._id || n.id} neighborhood={n} />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="carousel-arrow"
              disabled={currentIndex + cardsPerPage >= matches.length}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Results;
