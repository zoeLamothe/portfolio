import React from 'react';
import './CSS/Benevolat.css';  
import refuge from './images/refuge.png';
import jdis from './images/comite.jfif'; 
function Benevolat() {
  return (
    <div>
      <section>
          <h2>Bénévolat</h2>
          
          <h3>VP COMMUNICATION POUR JDIS (JEUX ET DEFIS INFORMATIQUES DE SHERBROOKE) | 2024</h3>
          <ul>
            <li>Gérer les réseaux sociaux.</li>
            <li>Écrire et publier des publications sur les réseaux sociaux.</li>
            <li>Assurer la communication dans les départements de Génie et de Sciences.</li>
            <li>Implication spéciale : Aider à organiser et tester le jeu pour les JDIS Games 2024.</li>
          </ul><div className="image-container">
            <img src={jdis} alt="JDIS" className="reference-image" />
          </div>

          <h3>REFUGE LE CHÂTEAU - HIVER 2024 - JUSQU'À CE JOUR</h3>
          <ul>
            <li>Ménage du refuge.</li>
            <li>Accueil des clients au café.</li>
            <li>Service en tant que barista.</li>
            <li>Conception d'une affiche publicitaire pour promouvoir les activités et services du refuge, en mettant l'accent sur une présentation professionnelle et impactante destinée à attirer un large public.</li>
          </ul>
          
          <div className="image-container">
            <img src={refuge} alt="Refuge" className="reference-image" />
          </div>
        </section>
    </div>
  );
}

export default Benevolat;
