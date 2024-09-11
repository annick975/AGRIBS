import React from 'react';
import './header.css';
import logo from "../../assets/Logo.png"

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        {/* Replace the src with the actual path to the logo image */}
        <img src={logo} alt="AGRIBS Logo" className="logo" />
        <span className="logo-text">AGRIBS</span>
      </div>
      <nav className="nav-links">
        <a href="#">Ahabanza</a>
        <a href="#">Ibyo dukora</a>
        <a href="#">Tuvugishe</a>
        <a href="#">Kwinjira</a>
      </nav>
    </header>
  );
};

export default Header;