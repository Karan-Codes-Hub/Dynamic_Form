import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          {["Dashboard", "Features", "Pricing", "Contact"].map((tab) => (
            <a key={tab} href={`#${tab.toLowerCase()}`} className="menu-link">
              {tab}
            </a>
          ))}
        </div>

        {/* Login/Signup Button */}
        <div className="login-btn-container">
          <button className="login-btn">Login / Signup</button>
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
            <a
              key={tab}
              href={`#${tab.toLowerCase()}`}
              className="mobile-menu-link"
              onClick={() => setIsOpen(false)}
            >
              {tab}
            </a>
          ))}
          <button className="mobile-login-btn">Login / Signup</button>
        </div>
      )}
    </div>
  );
};

export default Header;
