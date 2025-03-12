import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/img/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="custom-navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="SpellFinder Logo" className="logo" />
          <span className="navbar-title">
            Spell<span className="highlight">Finder</span>
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            to="/favorites"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;