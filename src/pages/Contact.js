import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>👋 Let’s Connect</h2>
        <p>I’m <strong>Kowsik Gatti</strong>, the developer of NeighborFit. Feel free to reach out!</p>
        
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:kowsikgatti11@gmail.com">kowsikgatti11@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaGithub className="icon" />
            <a href="https://github.com/Gattikowsik" target="_blank" rel="noopener noreferrer">
              github.com/Gattikowsik
            </a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="icon" />
            <a href="https://linkedin.com/in/kowsikgatti" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/kowsikgatti
            </a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Punjab, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
