// src/components/HeroSection/HeroSection.tsx
import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Build Your Dynamic Forms with Ease</h1>
        <p>
          Drag and drop form elements to create custom forms. Download the JSON configuration and
          integrate it into your projects seamlessly.
        </p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;