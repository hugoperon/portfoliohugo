import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Projects.css';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">
          <span className="highlight">Mes Projets</span>
        </h2>

        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <div 
              key={project.id}
              className={`project-card ${activeProject === project.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 