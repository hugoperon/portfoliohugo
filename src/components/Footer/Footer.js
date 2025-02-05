import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Hugo Peron</h3>
            <p className="footer-description">
              Développeur Full Stack passionné par la création d'expériences numériques innovantes
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Liens Rapides</h4>
              <nav>
                <a href="#about">À propos</a>
                <a href="#projects">Projets</a>
                <a href="#skills">Compétences</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Me Suivre</h4>
              <div className="footer-social">
                <a 
                  href={portfolioData.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href={portfolioData.contact.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a 
                  href={portfolioData.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href={portfolioData.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${portfolioData.contact.email}`}>
                  {portfolioData.contact.email}
                </a>
              </p>
              <p>
                <i className="fas fa-mobile-alt"></i>
                <a href={`tel:${portfolioData.contact.phone}`}>
                  {portfolioData.contact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hugo Peron. Tous droits réservés.</p>
          <div className="footer-drone">
            <a 
              href={portfolioData.contact.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Découvrez mes vidéos de drone
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 