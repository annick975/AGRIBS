import React from 'react';
import { PhoneTwoTone, MailOutlined } from '@ant-design/icons';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="form-container">
        <h3 className="question-text">Have questions?</h3>
        <h2 className="form-title">Send us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" className="form-input" />
          <div className="input-row">
            <input type="email" placeholder="Email*" className="form-input" />
            <input type="tel" placeholder="Phone" className="form-input" />
          </div>
          <textarea placeholder="Drop us a line*" className="form-textarea"></textarea>
          <button className="submit-btn" type="submit">Get in touch</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact information</h2>
        <p><PhoneTwoTone /> <strong>Hot line:</strong> +250 786 764 208</p>
        <p> <strong>Our Location:</strong> Kigali, Rwanda</p>
        <p><MailOutlined /> <strong>Official Email:</strong> info@agribs.com</p>
      </div>
    </div>
  );
};

export default Contact;