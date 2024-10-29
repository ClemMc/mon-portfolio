import React from 'react';
import '../styles/home.scss';
import Banner from '../components/Banner';
import oim from '../assets/oim.webp';
import Card from '../components/Card';
import Data from '../components/Data';
import '../styles/projects.scss';
import '../styles/home.scss';
import ContactForm from '../pages/Contact';
import '../styles/contact.scss';

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="header-continuity">
          <h1>Clément Metral</h1>
          <h2 className="subtitle">Aspirant Développeur Web</h2>
        </div>
        <div className="about-section">
          <Banner
            class="image"
            img={oim}
            alt="Ma photo"
            overlayText="" 
          />
          <div className="text">
            <h3>Qui suis-je ?</h3>
            <p>Jeune développeur web en formation, passionné par la création de sites et d'applications. 
              J'ai appris à utiliser HTML, CSS, JavaScript et React, et je suis actuellement en train de travailler sur un projet 
              de portfolio.</p>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="header-continuity">
            <h1>Portfolio</h1>
            <h2 className="subtitle">Projet réaliser lors de ma formation</h2>
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
                    />
                ))}
              </div>
            </div>
          </div>
      </section>
        
      <section className="contact-section">
        <ContactForm />
      </section>
    </>
  );
};


export default Home;
