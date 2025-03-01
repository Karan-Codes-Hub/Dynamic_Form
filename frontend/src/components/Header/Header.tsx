import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // Handles navigation with login interception
  const handleNavigation = (path: string) => {
    console.log(path);
    if (path === "/dashboard") {
      // Save the intended path
      localStorage.setItem("redirectAfterLogin", path);
      navigate("/login");
    } else {
      
      // navigate(path);
      
    }
  };
  return (
    <div className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="headerNameLogo-container">
          <div className="logo-container">
            <div className="flip-box">
              <div className="logo-square"></div>
              <div className="logo-square-back"></div>
            </div>
          </div>

          <h1 className="logo">
            Form<span className="highlight">Builder</span>
          </h1>

        </div>


        {/* Desktop Menu */}
        <div className="desktop-menu">
          {["Dashboard", "Features", "Contact"].map((tab) => (
            <div
              key={tab}
              className="menu-link"
              onClick={() => handleNavigation(`/${tab.toLowerCase()}`)}
            >
              {tab}
            </div>
          ))}
        </div>


        {/* Login/Signup Button */}
        <div className="login-btn-container">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login / SignUp
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {["Dashboard", "Features", "Pricing", "Contact"].map((tab) => (

            <div
              key={tab}
              className="mobile-menu-link"
              onClick={() => handleNavigation(`/${tab.toLowerCase()}`)}
            >
              {tab}
            </div>

          ))}
          <button className="mobile-login-btn" onClick={() => navigate("/login")}>Login / SignUp</button>
        </div>
      )}
    </div>
  );
};

export default Header;
