import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NeighborhoodCard from '../components/NeighborhoodCard';

const Results = () => {
  const [matches, setMatches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 5;

  useEffect(() => {
    const storedPrefs = localStorage.getItem('userPreferences');

    if (storedPrefs) {
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
      console.warn("⚠️ No user preferences found in localStorage.");
    }
  }, []);

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

      {matches.length === 0 ? (
        <p style={{ textAlign: 'center' }}>
          No data found. Please <Link to="/questionnaire">take the questionnaire</Link> first.
        </p>
      ) : (
        <>
          <div className="carousel-container">
            <button
              onClick={handlePrev}
              className="carousel-arrow"
              disabled={currentIndex === 0}
            >
              ←
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
            >
              →
            </button>
          </div>

          <div className="pagination-info">
            Showing cards {currentIndex + 1} to{" "}
            {Math.min(currentIndex + cardsPerPage, matches.length)} of{" "}
            {matches.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Results;
