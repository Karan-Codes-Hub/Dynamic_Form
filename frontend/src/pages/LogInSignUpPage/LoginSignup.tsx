import React, { useEffect, useState } from "react";
import { FaGoogle, FaGithub, FaLinkedin, FaArrowLeft } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import { showToast } from "../../services/toastService";
import AnimatedLoader from "../../components/CustomComponents/LoaderComponent/AnimatedLoader";

interface User {
  email?: string;
  token?: string;
  password?: string;
  confirmPassword?: string;
}

const LoginSignup: React.FC = () => {
  const [userObject, setUserObject] = useState<User>({ email: "", password: "", confirmPassword: "" });
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateForm = () => {
    if (!userObject.email || !userObject.password) {
      showToast("All fields are required!", "error");
      return false;
    }

    if (!emailRegex.test(userObject.email)) {
      showToast("Invalid email format!", "error");
      return false;
    }

    if (!passwordRegex.test(userObject.password)) {
      showToast("Password must be at least 8 characters long and include a number, a letter, and a special character!", "error");
      return false;
    }

    if (isSignup && userObject.password !== userObject.confirmPassword) {
      showToast("Passwords do not match!", "error");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    showToast(isSignup ? "Signup Successful!" : "Login Successful!", "success");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setUserObject((prevState) => ({ ...prevState, [field]: e.target.value }));
  };
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        //preventing default form behaviour
        
        handleSubmit();
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [userObject]);
  return (
    <div className="login-container">
      {/* Show Loader when loading */}
      {isLoading ? (
        <AnimatedLoader message="Redirecting ..." />
      ) : (
        <div className="login-box">
          {/* Back Button */}
          <button className="back-btn" onClick={() => navigate("/")}>
            <FaArrowLeft className="back-icon" /> Back
          </button>

          <h2 className="login-title">{isSignup ? "Create an Account" : "Welcome Back"}</h2>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={userObject.email}
            onChange={(e) => handleValueChange(e, "email")}
            required
          />

          {/* Password Input */}
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-field"
              value={userObject.password}
              onChange={(e) => handleValueChange(e, "password")}
              required
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password (Only for Signup) */}
          {isSignup && (
            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="input-field"
                value={userObject.confirmPassword}
                onChange={(e) => handleValueChange(e, "confirmPassword")}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          )}

          {/* Submit Button */}
          <button className="submit-btn" onClick={handleSubmit}>{isSignup ? "Sign Up" : "Login"}</button>

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
      )}
    </div>
  );

};

export default LoginSignup;
