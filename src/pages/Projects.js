import React from 'react';
import Card from '../components/Card';
import Data from '../components/Data';
import '../styles/projects.scss';

const ProjectsPage = () => {
    return (
      <>
        <div className="header-continuity">
          <h1 id= "projects">Portfolio</h1>
          <h2 className="subtitle">Projets réalisés lors de ma formation.</h2>
        </div>

        <div>
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
        </div>
      </>
    );
};

export default ProjectsPage;
