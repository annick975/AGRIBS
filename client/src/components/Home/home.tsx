import React from "react";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="main-title">
          The <span className="highlight">Solution</span> To Your Market
        </h1>
        <h2 className="subtitle">Access Needs</h2>
        <p className="description">
          Easily Connect with Buyers Through AGRIBS, Maximize Your Profits and
          Minimize Market Challenges.
        </p>
        <button className="cta-button">Join Our Community</button>
      </div>
    </div>
  );
};

export default Home;
