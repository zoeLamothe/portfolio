import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">À propos de moi</Link>
        </li>
        <li className="nav-item">
          <Link to="/cv">CV</Link>
          <ul className="dropdown-menu">
            <li><Link to="/education">Éducation</Link></li>
            <li><Link to="/experience">Expériences</Link></li>
            <li><Link to="/projects">Projets</Link></li>
            <li><Link to="/skills">Compétences</Link></li>
            <li><Link to="/competitions">Compétitions Informatiques</Link></li>
            <li><Link to="/benevolat">Bénévolat</Link></li>
            <li><Link to="/references">Références</Link></li>
            <li><Link to="/hobbies">Loisirs</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
