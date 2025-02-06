import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import './About.css';
import avatar from '../../assets/imgs/avatar.jpg';

function About() {
  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: portfolioData.contact.social.facebook },
    { icon: 'fab fa-instagram', url: portfolioData.contact.social.instagram },
    { icon: 'fab fa-linkedin-in', url: portfolioData.contact.social.linkedin },
    { icon: 'fas fa-envelope', url: `mailto:${portfolioData.contact.email}` }
  ];

  const handleDownloadCV = () => {
    const cvUrl = `${process.env.PUBLIC_URL}/assets/cv/CV_Hugo_Peron.pdf`;
    window.open(cvUrl, '_blank');
  };

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text-section">
            <h1 className="about-title">
              <span className="highlight">Développeur Full Stack</span>
              <br />Passionné par l'Innovation
            </h1>
            
            <p className="about-description">
              Passionné de technologie et de mécanique, je suis un développeur curieux et polyvalent.
              J'adore travailler en équipe et combiner mes passions, notamment avec la réalisation de
              vidéos par drone. Je transforme des idées en expériences numériques exceptionnelles.
            </p>

            <div className="tech-stack">
              <h3>Technologies favorites</h3>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">C#</span>
                <span className="tech-tag">Flutter</span>
                <span className="tech-tag">Unity</span>
              </div>
            </div>

            <div className="personal-interests">
              <h3>Centres d'intérêt</h3>
              <div className="interest-tags">
                <span className="interest-tag">Drone</span>
                <span className="interest-tag">Automobile</span>
                <span className="interest-tag">Sports</span>
                <span className="interest-tag">Voyages</span>
                <span className="interest-tag">Bricolage</span>
              </div>
            </div>

            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> {portfolioData.contact.email}</p>
              <p><i className="fas fa-mobile-alt"></i> {portfolioData.contact.phone}</p>
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>

            <div className="cta-group">
              <button 
                className="cta-button secondary"
                onClick={handleDownloadCV}
              >
                Télécharger CV
              </button>
            </div>
          </div>

          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image-container">
                <img 
                  src={avatar}
                  alt="Portrait professionnel"
                  className="profile-image"
                />
              </div>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Années d'expérience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projets réalisés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 