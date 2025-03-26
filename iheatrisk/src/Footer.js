// Footer.js
import React from 'react';
import './Footer.css';

// Example logos
import logoUI from './assets/uic_logo.png';
import logoQGroup from './assets/cardiff.png';
import logoDPI from './assets/dpi_logo2.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logos">
          <img src={logoUI} alt="University of Illinois System" />
          <img src={logoQGroup} alt="Q-group Logo" />
          <img src={logoDPI} alt="DPI Logo" />
        </div>
        <p>&copy; {new Date().getFullYear()} iHEATRISK. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;