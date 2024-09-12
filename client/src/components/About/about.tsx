// About.tsx
import React from 'react';
import './About.css';
import farmer1 from "../../assets/farmer1.jpeg"
import farmer2 from "../../assets/farmer2.jpg"

const About: React.FC = () => {
  return (
    <div className="about-agribs">
      <section className="about-section">
        <h2>About <span className="highlight">AGRIBS</span></h2>
        <p>
          At AGRIBS, we bridge the gap between farmers and buyers with a seamless,
          transparent marketplace. Our mission is to empower farmers by providing direct market access,
          ensuring fair prices and the freshest produce for buyers. We support local agriculture,
          sustainable farming, and a community where everyone benefits—farmers, buyers, and the environment.
          Through our user-friendly platform and commitment to excellence,
          we're transforming farm-to-market connections.
        </p>
        <div className="image-container">
          <img src={farmer1} alt="Farmer with produce" className="farmer-image" />
          <img src={farmer2} alt="Fresh vegetables" className="vegetables-image" />
        </div>
      </section>

      <section className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">
          <div className="review-card">
            <img src="/path-to-jake-image.jpg" alt="Jake M" className="reviewer-image" />
            <h3>Jake M</h3>
            <p className="reviewer-type">A verified farmer</p>
            <blockquote>
              An incredible service!
              I easily connected with buyers and secured competitive
              prices for my produce, ensuring it reached the market in
              perfect condition on harvest day.
            </blockquote>
            <div className="rating">★★★★★</div>
          </div>
          <div className="review-card">
            <img src="/path-to-ruth-image.jpg" alt="Ruth B" className="reviewer-image" />
            <h3>Ruth B</h3>
            <p className="reviewer-type">A verified buyer</p>
            <blockquote>
              Quick and reliable!
              I found farmers effortlessly and received fresh produce
              delivered on time, straight from their farms to my
              hands.
            </blockquote>
            <div className="rating">★★★★★</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
