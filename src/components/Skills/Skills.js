import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Skills.css';

function Skills() {
  return (
    <section className="skills">
      <div className="skills-container">
        <h1 className="section-title">
          <span className="highlight">Compétences</span>
        </h1>

        <div className="skills-grid">
          <div className="skills-column">
            <h2 className="skills-subtitle">Compétences Techniques</h2>
            <div className="skills-list">
              {portfolioData.skills.technical.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="skill-progress-glow"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-column">
            <h3 className="skills-subtitle">Langues</h3>
            <div className="skills-list">
              {portfolioData.skills.languages.map((language, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{language.name}</span>
                    <span className="skill-percentage">{language.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${language.level}%` }}
                    >
                      <div className="skill-progress-glow"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-column">
            <h3 className="skills-subtitle">Centres d'Intérêt</h3>
            <div className="interests-grid">
              {portfolioData.personalInfo.interests.map((interest, index) => (
                <div key={index} className="interest-card">
                  <h4 className="interest-title">{interest.title}</h4>
                  <p className="interest-description">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills; 