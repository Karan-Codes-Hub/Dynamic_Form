import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import LoginSignup from "../src/pages/LogInSignUpPage/LoginSignup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedLoader from "./components/CustomComponents/LoaderComponent/AnimatedLoader";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import Page404 from "./pages/NotFoundpage/Page404";
import CreateForm from "../src/pages/CreateForm/CreateForm";

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
        theme="light"
        toastStyle={{
          backgroundColor: "#ffffff",
          color: "#333",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "12px",
          borderLeft: "5px solid #ff8c00",
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
  const navigate = useNavigate();
  const isRootRoute = location.pathname === "/";

  // Redirect to `/dashboard?tab=Home` when the user navigates to `/dashboard`
  useEffect(() => {
    if (location.pathname === "/dashboard" && !location.search.includes("tab=")) {
      navigate("/dashboard?tab=Home", { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
     {isRootRoute && <Header />}

      <Routes>
       
      <Route path="/login" element={<LoginSignup />} />
        <Route path="/SignUp" element={<LoginSignup />} />
        <Route path="/loader" element={<AnimatedLoader message="Loading..." />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createform" element={<CreateForm />} />
         {/* 404 Catch-All Route */}
        {location.pathname != "/" && <Route path="*" element={<Page404 />} />}
      </Routes>
      {isRootRoute && <Footer />}

    </>
  );
};

export default App;
