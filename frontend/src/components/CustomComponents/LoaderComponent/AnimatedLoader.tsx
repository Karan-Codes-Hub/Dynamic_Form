import React from "react";
import "./AnimatedLoader.css";

interface LoaderProps {
  message: string;
}

const AnimatedLoader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="loader-overlay">
      <div className="container">
        <div className="ball yellow"></div>
        <div className="ball red"></div>
        <div className="ball blue"></div>
        <div className="ball violet"></div>
      </div>
      <p className="loader-text">{message}</p>
    </div>
  );
};

export default AnimatedLoader;
