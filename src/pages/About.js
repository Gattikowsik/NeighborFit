import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <h2>About NeighborFit</h2>
        <p className="tagline">🏙️ Matching you to the neighborhood that fits your life.</p>

        <div className="about-content">
          <p>
            <strong>NeighborFit</strong> is a smart recommendation platform designed to help people 
            find the most suitable neighborhoods to live in — based on their lifestyle preferences. Whether 
            you're a student, working professional, or a family relocating to Bangalore, we help you discover 
            areas that align with what you value most: safety, affordability, connectivity, nature, and more.
          </p>

          <p>
            With our intuitive questionnaire and intelligent matching algorithm, you get a personalized list 
            of neighborhoods that feel like home — even before stepping foot there.
          </p>

          <p>
            Built with 💙 by <strong>Kowsik Gatti</strong> a full-stack Devloper, NeighborFit combines modern 
            technologies like React, Node.js, MongoDB, and Express — with a strong focus on usability and smart city goals.
          </p>
        </div>

        <div className="about-footer">
          <p>✨ Empowering smarter relocations. Designed for tomorrow’s cities.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
