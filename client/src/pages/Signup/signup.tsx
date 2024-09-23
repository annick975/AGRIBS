import React, { useState } from "react";
import logo from "../../assets/Logo.png";

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="signup-container">
      <div className="logo-container">
        {/* Replace the source with the actual path of the image */}
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h2 className="form-title">
        signup to <span className="highlight-text">AGRIBS</span>
      </h2>
      <form className="signup-form">
        <div className="input-group">
          <input type="text" placeholder="Enter Your Name *" required />
        </div>
        <div className="input-group">
          <input type="email" placeholder="Enter Your Email *" required />
        </div>
        <div className="input-group role-input">
          <input type="text" placeholder="Choose your Role *" required />
          <button type="button" className="role-button">
            {/* Plus icon */}
            &#43;
          </button>
        </div>
        <div className="input-group password-input">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password *"
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {/* Eye icon */}
            &#128065;
          </button>
        </div>
        <div className="input-group password-input">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password *"
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {/* Eye icon */}
            &#128065;
          </button>
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <p className="login-text">
        Already have an account? <a href="/login">log in</a>
      </p>
    </div>
  );
};

export default Signup;
