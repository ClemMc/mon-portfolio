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
          <p>Je suis un développeur web passionné par la création de sites modernes et fonctionnels, en constante évolution.</p>
        </div>
      </section>
    </>
  );
};


export default Home;
