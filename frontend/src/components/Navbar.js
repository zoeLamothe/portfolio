import React from 'react';
import './Navbar.css';  // Vérifie que le fichier CSS est bien lié

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#">Accueil</a>
        </li>
        <li className="nav-item">
          <a href="#">CV</a>
          <ul className="dropdown-menu">
            <li><a href="#education">Éducation</a></li>
            <li><a href="#experience">Expériences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#references">Références</a></li>
            <li><a href="#hobbies">Loisirs</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
