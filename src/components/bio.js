import React from 'react';
import '../style/bio.scss';
import aboutImage from '../style/Medias/casque-de-musique.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content-dev">
        {/* Titre en colonne */}
        <div className="about-title">
          <span className="dj-label">DJ</span>
          <span className="skill-label">COMPOSER</span>
          <span className="prod-label">PRODUCER</span>
        </div>

        {/* Contenu avec image et texte */}
        <div className="about-content">
          <div className="about-Img">
            <img src={aboutImage} alt="Chris, Dev Web" />
          </div>
          <div className="about-text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
