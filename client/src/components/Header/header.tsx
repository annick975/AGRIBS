import React from "react";
import "./header.css";
import logo from "../../assets/Logo.png";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="AGRIBS Logo" className="logo" />
        <span className="logo-text">AGRIBS</span>
      </div>
      <nav className="nav-links">
        <a href="#">Ahabanza</a>
        <a href="#">Ibyo dukora</a>
        <a href="#">Tuvugishe</a>
        <a href="/signup">Kwinjira</a>
      </nav>
    </header>
  );
};

export default Header;
