import React from "react";
import "./Offers.css";

const Offers: React.FC = () => {
  return (
    <section className="offers-section">
      <div className="offers-content">
        <h2 className="offers-title">Our offers</h2>
        <p className="offers-description">
          Get the best deals on fresh produce and market access.  <br />
          <span className="highlight">AGRIBS</span> connects farmers with buyers, 
          offering competitive prices, reliable deliveries, 
          and seasonal discounts.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="offers-shape"></div>
    </section>
  );
};

export default Offers;
