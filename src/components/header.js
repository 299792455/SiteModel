import React, { useState } from 'react'; 
import '../style/header.scss';
import logo from '../style/Medias/casque-de-musique.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo Web Dev" />
      </div>
      <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><a href="#Bio">Bio</a></li>
          <li><a href="#Bio">My Beats</a></li>
          <li><a href="#Agenda">Agenda</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
