import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './NeighborhoodDetail.css'; // Assuming you have a CSS file for styling
const NeighborhoodDetail = () => {
  const { id } = useParams();
  const [neighborhood, setNeighborhood] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/neighborhoods/${id}`)
      .then(res => res.json())
      .then(data => setNeighborhood(data))
      .catch(err => console.error("Error fetching detail:", err));
  }, [id]);

  if (!neighborhood) {
    return <div style={{ padding: '2rem' }}>Loading...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{neighborhood.name}</h2>
      <ul>
        <li><strong>Safety:</strong> {neighborhood.safety}/5</li>
        <li><strong>Affordability:</strong> {neighborhood.affordability}/5</li>
        <li><strong>Transport:</strong> {neighborhood.transport}/5</li>
        <li><strong>Green Spaces:</strong> {neighborhood.greenSpaces}/5</li>
        <li><strong>Nightlife:</strong> {neighborhood.nightlife}/5</li>
        <li><strong>Education:</strong> {neighborhood.education}/5</li>
        <li><strong>Tech Proximity:</strong> {neighborhood.techProximity}/5</li>
      </ul>
      <Link to="/results">← Back to results</Link>
    </div>
  );
};

export default NeighborhoodDetail;
