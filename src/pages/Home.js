import React from 'react';
import '../styles/home.scss';
import Banner from '../components/Banner';
import oim from '../assets/oim.webp';
import ContactForm from '../pages/Contact';
import ProjectsPage from '../pages/Projects';

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
            <p>Je suis en reconversion professionnelle dans le développement web. J'ai suivi une formation axée sur les technologies front-end, 
              où j'ai acquis des compétences solides en HTML, CSS, Sass, et JavaScript. J'ai également appris à utiliser des frameworks modernes comme React, ainsi que des 
              outils professionnels tels que VS Code pour optimiser mon flux de travail.</p> 
          </div>
        </div>
      </section>
      <section>
        <ProjectsPage />
      </section>
        
      <section>
        <ContactForm />
      </section>
    </>
  );
};


export default Home;
