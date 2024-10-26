import React from 'react';
import Card from '../components/Card';
import Data from '../components/Data';
import '../styles/projects.scss';

const ProjectsPage = () => {
    return (
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
    );
};

export default ProjectsPage;
