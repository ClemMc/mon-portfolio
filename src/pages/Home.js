import React from 'react';
import '../styles/home.scss';
import Banner from '../components/Banner';
import oim from '../assets/oim.webp';
import '../styles/projects.scss';
import '../styles/home.scss';
import ContactForm from '../pages/Contact';
import ProjectsPage from '../pages/Projects';
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
