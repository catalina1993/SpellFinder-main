import React, { useState } from "react";
import logoImg from "../assets/img/logo.png";
import "../styles/Header.css"; // Ensure you have Header.css

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="custom-navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <a href="/" className="navbar-logo">
          <img src={logoImg} alt="SpellFinder Logo" className="logo" />
          <span className="navbar-title">
            Spell<span className="highlight">Finder</span>
          </span>
        </a>

        {/* Hamburger Menu for Mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navbar Links */}
        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="/" className="nav-item">
            Home
          </a>
          <a href="/favorite" className="nav-item">
            Favorite
          </a>
          <a href="/about" className="nav-item">
            About Us
          </a>
          <a href="/help" className="nav-item">
            Help
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
