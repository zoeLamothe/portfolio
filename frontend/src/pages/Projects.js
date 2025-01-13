import React from 'react';
import './CSS/CV.css';  
import projetVideo from './images/Projet.mp4';

function Projects() {
  return (
    
        <div className="cv-container">
      <section>
          <h3>Projet de fin de baccalauréat - Simulation d’une mini-usine | Productique Québec | Été 2024</h3>
          <ul>
            <li>Modélisation et simulation d'une mini-usine pour optimiser la production avec AnyLogic.</li>
            <li>Développement d'une interface en temps réel avec Node-RED et MQTT.</li>
            <li>Analyse des scénarios de production et identification des blocages.</li>
            <li>Documentation complète du projet de 49 pages.</li>
          </ul>
          <div className="video-container">
          <video controls className="project-video">
            <source src={projetVideo} type="video/mp4" />
            Votre navigateur ne prend pas en charge la balise vidéo.
          </video>
        </div>

          <h3>Projet de recherche sur l'approximation du nombre pi | Cégep de Saint-Laurent | 2020</h3>
          <ul>
            <li>Utilisation de méthodes comme l'aiguille de Buffon et la méthode de Monte Carlo (Python).</li>
          </ul>
        </section>
    </div>

  );
}

export default Projects;
