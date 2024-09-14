import React from 'react';
import './About.css';
import jake from "../../assets/farmer1.jpeg";
import ruth from "../../assets/farmer2.jpg";

const About: React.FC = () => {
  return (
    <div className="about-agribs-container">
      <section className="about-section">
        <h2>About <span className="agribs-highlight">AGRIBS</span></h2>
        <p>
          At <span className="agribs-highlight">AGRIBS</span>, we bridge the gap between farmers and buyers with a seamless,
          transparent marketplace. Our mission is to empower farmers by providing direct market access,
          ensuring fair prices and the freshest produce for buyers. We support local agriculture,
          sustainable farming, and a community where everyone benefits—farmers, buyers, and the environment.
          Through our user-friendly platform and commitment to excellence, we’re transforming farm-to-market connections.
        </p>
      </section>

      <div className="images-container">
       <div className="image image-1">
          <img src={jake} alt="Farmer holding vegetables" />
        </div>
        <div className="image image-2">
          <img src={ruth} alt="Basket of fresh produce" />
        </div>
      </div> 
    
      <section className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="review-cards">
          <div className="review-card">
            <div className="review-header">
              <img src={jake} alt="Jake M" className="profile-pic" />
              <div>
                <h4>Jake M</h4>
                <p>A verified farmer</p>
              </div>
            </div>
            <blockquote>
              <p>An incredible service!</p>
              <p>
                I easily connected with buyers and secured competitive prices for my produce, ensuring it reached the
                market in perfect condition on harvest day.
              </p>
            </blockquote>
            <div className="rating">★★★★★</div>
          </div>

          <div className="review-card">
            <div className="review-header">
              <img src={ruth} alt="Ruth B" className="profile-pic" />
              <div>
                <h4>Ruth B</h4>
                <p>A verified buyer</p>
              </div>
            </div>
            <blockquote>
              <p>Quick and reliable!</p>
              <p>
                I found farmers effortlessly and received fresh produce delivered on time, straight from their farms to my hands.
              </p>
            </blockquote>
            <div className="rating">★★★★★</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;