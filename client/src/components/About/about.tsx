import React from "react";
import "./About.css";
import jake from "../../assets/farmer1.jpeg";
import ruth from "../../assets/farmer2.jpg"

const About: React.FC = () => {
  return (
    <div className="about-agribs-container">
      <section className="about-section">
        <h2 className="about-title">
          About <span className="agribs-highlight">AGRIBS</span>
        </h2>
        <p className="about-text">
          At <span className="agribs-highlight">AGRIBS</span>, we bridge the gap
          between farmers and buyers with a seamless, transparent marketplace.
          Our mission is to empower farmers by providing direct market access,
          ensuring fair prices and the freshest produce for buyers. We support
          local agriculture, sustainable farming, and a community where everyone
          benefits—farmers, buyers, and the environment. Through our
          user-friendly platform and commitment to excellence, we're
          transforming farm-to-market connections.
        </p>
      </section>

      <section className="reviews-section">
        <h2 className="reviews-title">Customer Reviews</h2>
        <div className="reviews-container">
          <div className="review-card">
            <img src={jake} alt="Jake M" className="review-avatar" />
            <p className="review-name">Jake M</p>
            <p className="review-role">A verified farmer</p>
            <blockquote className="review-text">
              <p>An incredible service!</p>
              <p>
                I easily connected with buyers and secured competitive prices
                for my produce, ensuring it reached the market in perfect
                condition on harvest day.
              </p>
            </blockquote>
            <div className="review-rating">★★★★★</div>
          </div>

          <div className="review-card">
            <img src={ruth} alt="Ruth B" className="review-avatar" />
            <p className="review-name">Ruth B</p>
            <p className="review-role">A verified buyer</p>
            <blockquote className="review-text">
              <p>Quick and reliable!</p>
              <p>
                I found farmers effortlessly and received fresh produce
                delivered on time, straight from their farms to my hands.
              </p>
            </blockquote>
            <div className="review-rating">★★★★★</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;