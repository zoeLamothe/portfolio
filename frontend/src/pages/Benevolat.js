import React from 'react';
import './CSS/CV.css';  
import refuge from './images/refuge.png';
import jdis from './images/comite.jfif'; 

function Benevolat() {
  return (
    <div className="cv-container">
      <section>
        <h3>VP Communication pour JDIS (Jeux et Défis Informatiques de Sherbrooke) | 2024</h3>
        <ul>
          <li>Gérer les réseaux sociaux.</li>
          <li>Écrire et publier des publications sur les réseaux sociaux.</li>
          <li>Assurer la communication dans les départements de Génie et de Sciences.</li>
          <li>Implication spéciale : Aider à organiser et tester le jeu pour les JDIS Games 2024.</li>
        </ul>
        <div className="image-container">
          <img src={jdis} alt="JDIS" className="reference-image" />
        </div>
      </section>

      <section>
        <h3>Refuge Le Château - Hiver 2024 - Jusqu’à ce jour</h3>
        <ul>
          <li>Ménage du refuge.</li>
          <li>Accueil des clients au café.</li>
          <li>Service en tant que barista.</li>
          <li>
            Conception d'une affiche publicitaire pour promouvoir les activités et services du refuge, 
            en mettant l'accent sur une présentation professionnelle et impactante destinée à attirer un large public.
          </li>
        </ul>
        <div className="image-container">
          <img src={refuge} alt="Refuge" className="reference-image" />
        </div>
      </section>
    </div>
  );
}

export default Benevolat;
