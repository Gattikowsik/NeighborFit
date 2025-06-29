import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Questionnaire = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    safety: 3,
    affordability: 3,
    transport: 3,
    greenSpaces: 3,
    nightlife: 3,
    education: 3,
    techProximity: 3
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass data via localStorage or global state for now
    localStorage.setItem('userPreferences', JSON.stringify(formData));
    navigate('/results');
  };

  const renderSlider = (label, name) => (
    <div className="question">
      <label>{label} ({formData[name]})</label>
      <input
        type="range"
        name={name}
        min="1"
        max="5"
        value={formData[name]}
        onChange={handleChange}
      />
    </div>
  );

  return (
    <div className="questionnaire">
      <h2>Rate Your Lifestyle Preferences</h2>
      <form onSubmit={handleSubmit}>
        {renderSlider("Safety", "safety")}
        {renderSlider("Affordability", "affordability")}
        {renderSlider("Access to Public Transport", "transport")}
        {renderSlider("Green Spaces (Parks/Lakes)", "greenSpaces")}
        {renderSlider("Nightlife & Cafes", "nightlife")}
        {renderSlider("Schools & Education", "education")}
        {renderSlider("Proximity to Tech Hubs", "techProximity")}
        <button type="submit">Find My Neighborhood</button>
      </form>
    </div>
  );
};

export default Questionnaire;
