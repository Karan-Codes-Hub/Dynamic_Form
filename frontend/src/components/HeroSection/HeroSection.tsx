import React from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="particles"></div>
      <div className="hero-content">
        <h1 className="fade-in">Build Dynamic Forms with Ease</h1>
        <p className="fade-in">
          Drag and drop form elements effortlessly. Customize, preview, and download your form’s JSON configuration for seamless integration.
        </p>
        <button className="cta-button fade-in" onClick={handleClick}>Get Started</button>
      </div>
      <div className="wave"></div>
    </section>
  );
};

export default HeroSection;
