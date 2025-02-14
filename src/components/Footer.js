import logoImg from "../assets/img/logo.png";
import React from "react";
import { Container } from "reactstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <div className="footer-left">
          <img src={logoImg} alt="SpellFinder Logo" className="footer-logo" />
          <span className="footer-brand">
            Spell<span className="highlight">Finder</span>
          </span>
        </div>
        <div className="footer-right">
          <p>© 2025 SpellFinder. May your spells always find their mark.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
