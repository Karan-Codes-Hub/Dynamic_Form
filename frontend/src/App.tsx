import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import LoginSignup from "../src/pages/LogInSignUpPage/LoginSignup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedLoader from "./components/CustomComponents/LoaderComponent/AnimatedLoader";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light" // Light theme
        toastStyle={{
          backgroundColor: "#ffffff", // Light background
          color: "#333", // Dark text for readability
          borderRadius: "10px", // Smooth corners
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
          padding: "12px",
          borderLeft: "5px solid #ff8c00", // Accent color for visibility
        }}
      />
      <Router>
        <AppLayout />
      </Router>
    </>
   
  );
};

const AppLayout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login";

  return (
    <>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/SignUp" element={<LoginSignup />} />
        <Route path="/loader" element={<AnimatedLoader message="Loading..." />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
};

export default App;
