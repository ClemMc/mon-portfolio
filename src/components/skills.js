import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/skills.scss';
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import jsLogo from '../assets/js-logo.png';
import reactLogo from '../assets/react-logo.png';
import sassLogo from '../assets/sass-logo.png';

const skillsData = [
  { name: "HTML", level: 90, logo: htmlLogo },
  { name: "CSS", level: 80, logo: cssLogo },
  { name: "JavaScript", level: 75, logo: jsLogo },
  { name: "React", level: 70, logo: reactLogo },
  { name: "Sass", level: 85, logo: sassLogo }
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Mes Compétences</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div className="skill-circle" key={index}>
            <div className="circle-container">
              <div className="logo-center">
                <img src={skill.logo} alt={`${skill.name} logo`} />
              </div>
              <CircularProgressbar
                value={skill.level}
                styles={buildStyles({
                  pathColor: `#EF6D58`,
                  textColor: '#3b82f6',
                  trailColor: '#d6d6d6',
                  textSize: '16px',
                  backgroundColor: '#ffffff',
                })}
              />
            </div>
            <div className="skill-text">
              <strong>{skill.name}</strong>: {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
