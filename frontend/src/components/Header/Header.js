import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>EstateElite</h1>
          </div>
          <Navigation />
          <div className="header-contact">
            <a href="tel:+1234567890" className="contact-link">
              <i className="fas fa-phone"></i>
              +123 456 7890
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;