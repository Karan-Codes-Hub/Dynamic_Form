import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import LoginSignup from "../src/pages/LogInSignUpPage/LoginSignup"; // Import the LoginSignup page

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

const AppLayout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login"; // Check if on login page

  return (
    <>
      {!isAuthPage && <Header />} {/* Show Header only if not on /login */}
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      {!isAuthPage && <Footer />} {/* Show Footer only if not on /login */}
    </>
  );
};

export default App;
