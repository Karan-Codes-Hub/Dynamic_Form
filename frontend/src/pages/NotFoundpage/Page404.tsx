import React from "react";
import { Link } from "react-router-dom";
import "./Page404.css"; // Import the updated styles

const Page404: React.FC = () => {
  return (
    <div className="page_404">
      <div>
        <div className="four_zero_four_bg">
          <h1>404</h1>
        </div>
        <div className="contant_box_404">
          <h3 className="h2">Looks like you're lost</h3>
          <p>The page you are looking for is not available!</p>
          <Link to="/" className="link_404">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
