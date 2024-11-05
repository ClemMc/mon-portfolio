import React from 'react';
import Card from '../components/Card';
import Data from '../components/Data';
import '../styles/projects.scss';
import '../styles/home.scss';

const ProjectsPage = () => {
    return (
      <>
        <section className="header-continuity">
          <h1>Portfolio</h1>
          <h2 className="subtitle">Projets réalisés lors de ma formation.</h2>
        </section>

        <section>
          <div className="projects-page">
            <div className="card-container">
            {Data.map((project, index) => (
              <Card 
                  key={index} 
                  logo={project.logo} 
                  category={project.category} 
                  Description={project.Description} 
                  link={project.link} 
                  Title={project.Title}
              />
            ))}
            </div>
          </div>
        </section>
      </>
    );
};

export default ProjectsPage;
