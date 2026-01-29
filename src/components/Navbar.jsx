import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          Jainshree <span className="logo-accent">DIGITAL</span>
        </a>
        
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary nav-btn">Get Quote</a>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
