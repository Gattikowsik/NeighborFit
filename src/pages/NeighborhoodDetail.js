import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './NeighborhoodDetail.css';

const NeighborhoodDetail = () => {
  const { id } = useParams();
  const [neighborhood, setNeighborhood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/neighborhoods/${id}`)
      .then(res => {
        if (!res.ok) {
          setNotFound(true);
          throw new Error('Not found');
        }
        return res.json();
      })
      .then(data => {
        setNeighborhood(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching detail:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="neighborhood-detail loading">Loading neighborhood...</div>;
  }

  if (notFound || !neighborhood) {
    return (
      <div className="neighborhood-detail not-found">
        <h2>Neighborhood Not Found</h2>
        <p>We couldn't find the neighborhood you're looking for.</p>
        <Link to="/results" className="back-link">← Back to Results</Link>
      </div>
    );
  }

  return (
    <div className="neighborhood-detail">
      <h2>{neighborhood.name}</h2>
      <div className="detail-card">
        <ul>
          <li><strong>Safety:</strong> {neighborhood.safety}/5</li>
          <li><strong>Affordability:</strong> {neighborhood.affordability}/5</li>
          <li><strong>Transport:</strong> {neighborhood.transport}/5</li>
          <li><strong>Green Spaces:</strong> {neighborhood.greenSpaces}/5</li>
          <li><strong>Nightlife:</strong> {neighborhood.nightlife}/5</li>
          <li><strong>Education:</strong> {neighborhood.education}/5</li>
          <li><strong>Tech Proximity:</strong> {neighborhood.techProximity}/5</li>
        </ul>
        <Link to="/results" className="back-link">← Back to Results</Link>
      </div>
    </div>
  );
};

export default NeighborhoodDetail;
