
import React from 'react';

const projects = [
    {
      id: 1,
      title: 'Booki',
      description: 'Description du projet 1',
      link: 'https://clemmc.github.io/P3-Booki/'
    },

  ];
  

  const Projects = () => {
    return (
        <>
            <section className="header-continuity">
                <h1>Mes Projets</h1>
                <h2 className="subtitle">Découvrez mes réalisations</h2>
            </section>
            <section id="projects">
                <div className="projects-section">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link}>Voir le projet</a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;
