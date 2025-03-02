import React from 'react';
import { CloudDownload, Build, TouchApp, Visibility, Speed, Security } from '@mui/icons-material';
import './Features.css';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <TouchApp fontSize="large" />,
      title: 'Drag & Drop Builder',
      description: 'Easily drag and drop form elements to create custom forms.',
    },
    {
      icon: <CloudDownload fontSize="large" />,
      title: 'Export as JSON',
      description: 'Download the form configuration in JSON format for seamless integration.',
    },
    {
      icon: <Build fontSize="large" />,
      title: 'Highly Customizable',
      description: 'Modify labels, options, and styles for each form element.',
    },
    {
      icon: <Visibility fontSize="large" />,
      title: 'Real-time Preview',
      description: 'Instantly preview how your form looks and behaves.',
    },
    {
      icon: <Speed fontSize="large" />,
      title: 'Optimized Performance',
      description: 'Lightning-fast rendering and smooth UI interactions.',
    },
    {
      icon: <Security fontSize="large" />,
      title: 'Secure & Reliable',
      description: 'Your data is protected with industry-standard security measures.',
    },
  ];

  return (
    <section className="features-section">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
