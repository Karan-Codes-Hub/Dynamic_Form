import React, { useState } from "react";
import { FaGoogle, FaGithub, FaLinkedin, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css"; // External CSS

const LoginSignup: React.FC = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const navigate = useNavigate(); // Navigation hook

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate("/")}>
          <FaArrowLeft className="back-icon" /> Back
        </button>

        <h2 className="login-title">{isSignup ? "Create an Account" : "Welcome Back"}</h2>

        {/* Email Input */}
        <input type="email" placeholder="Email" className="input-field" required />

        {/* Password Input */}
        <input type="password" placeholder="Password" className="input-field" required />

        {/* Confirm Password (Only for Signup) */}
        {isSignup && (
          <input type="password" placeholder="Confirm Password" className="input-field" required />
        )}

        {/* Submit Button */}
        <button className="submit-btn">{isSignup ? "Sign Up" : "Login"}</button>

        {/* Social Login Buttons */}
        <div className="social-login">
          <button className="social-btn google">
            <FaGoogle className="icon" /> Google
          </button>
          <button className="social-btn github">
            <FaGithub className="icon" /> GitHub
          </button>
          <button className="social-btn linkedin">
            <FaLinkedin className="icon" /> LinkedIn
          </button>
        </div>

        {/* Toggle Login & Signup */}
        <p className="toggle-text">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span className="toggle-link" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
