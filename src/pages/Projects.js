import React from 'react';
import Card from '../components/Card';
import Data from '../components/Data';
import '../styles/projects.scss';
import '../styles/home.scss';

const ProjectsPage = () => {
    return (
      <>
        <section className="header-continuity">
          <h2>Portfolio</h2>
          <h3 className="subtitle">Projet réaliser lors de ma formation</h3>
        </section>

        <section id="portfolio">
          <div className="projects-page">
            <div className="card-container">
              {Data.map((project, index) => (
                  <Card 
                      key={index} 
                      logo={project.logo} 
                      category={project.category} 
                      Description={project.Description} 
                      link={project.link} 
                  />
              ))}
            </div>
          </div>
        </section>
      </>
    );
};

export default ProjectsPage;
