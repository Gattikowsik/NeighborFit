import React from 'react';
import { Link } from 'react-router-dom';

const NeighborhoodCard = ({ neighborhood }) => {
  return (
    <div className="neighborhood-card">
      <h3>{neighborhood.name}</h3>
      <p>Match Score: <strong>{neighborhood.matchPercent}%</strong></p>
      <div className="card-details">
        <p>Safety: {neighborhood.safety}/5</p>
        <p>Affordability: {neighborhood.affordability}/5</p>
        <p>Transport: {neighborhood.transport}/5</p>
        <p>Green Spaces: {neighborhood.greenSpaces}/5</p>
        <p>Nightlife: {neighborhood.nightlife}/5</p>
        <p>Education: {neighborhood.education}/5</p>
        <p>Tech Proximity: {neighborhood.techProximity}/5</p>
      </div>
      <Link to={`/neighborhood/${neighborhood.id}`} className="detail-button">
        View Details
      </Link>
    </div>
  );
};

export default NeighborhoodCard;
