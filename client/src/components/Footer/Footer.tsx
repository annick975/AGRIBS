import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2 className="footer-brand">AGRIBS</h2>
          <p className="footer-description">
            Dedicated to strengthening the agricultural supply chain by connecting farmers with buyers.
          </p>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Our Offers</li>
            <li>About Us</li>
            <li>Sign up</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer-posts">
          <h4>Recent Posts</h4>
          <div className="post">
            <img src="/path/to/tomato-image.png" alt="Tomato farming" />
            <p>August 27 2024 <br/> Latest updates on tomato farming.</p>
          </div>
          <div className="post">
            <img src="/path/to/chile-image.png" alt="Chile cultivation" />
            <p>August 24 2024 <br/> New insights on chile cultivation.</p>
          </div>
        </div>
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>Kigali, Rwanda</p>
          <p>+250 786 764 208</p>
          <p>info@agribs.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© copyright 2024, All rights reserved</p>
        <div className="footer-links-bottom">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;