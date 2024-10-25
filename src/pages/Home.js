import React from 'react';
import '../styles/home.scss';
import Banner from '../components/Banner';
import oim from '../assets/oim.webp';

const Home = () => {
  return (
    <>
      <section className="header-continuity">
        <h1>Clément Metral</h1>
        <h2 className="subtitle">Aspirant Développeur Web</h2>
      </section>
      <section className="about-section">
        <Banner
          class="image"
          img={oim}
          alt="Ma photo"
          overlayText="" 
        />
        <div className="text">
          <h2>Qui suis-je ?</h2>
          <p>Je suis Clément Metral, un développeur web en formation, passionné par la création de sites et d'applications. 
            J'ai appris à utiliser HTML, CSS, JavaScript et React, et je suis actuellement en train de travailler sur un projet 
            de portfolio.</p>
        </div>
      </section>
    </>
  );
};


export default Home;
