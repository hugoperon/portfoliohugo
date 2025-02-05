import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <NavLink to="/">
            <span className="logo-text">Hugo Peron</span>
          </NavLink>
        </div>
        
        <nav className="nav-menu">
          <NavLink to="/" className="nav-link" end>
            À propos
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            Projets
          </NavLink>
          <NavLink to="/skills" className="nav-link">
            Compétences
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header; 