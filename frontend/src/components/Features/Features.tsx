// src/components/FeaturesSection/FeaturesSection.tsx
import React from 'react';
import './Features.css';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🖱️',
      title: 'Drag & Drop',
      description: 'Easily drag and drop form elements to build your custom forms.',
    },
    {
      icon: '📥',
      title: 'Download JSON',
      description: 'Download the form configuration as JSON for seamless integration.',
    },
    {
      icon: '⚙️',
      title: 'Customizable',
      description: 'Configure labels, options, and more for each form element.',
    },
  ];

  return (
    <div className="features-section">
      <h2>Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;