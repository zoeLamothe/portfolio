import React from 'react';
import jffi from './images/JFFI.jfif'; 
import cs from './images/CSGAME.jfif'; 
import hackfest from './images/Hackfest.jfif';  
import nsec from './images/nsec.jfif'; 

import './Competitions.css';  

function Competitions() {
  return (
    <div className="competitions-container">
      <h2>Compétitions Informatiques</h2>

      <div className="first-two-competitions">
        <div className="competition-item">
          <img src={jffi} alt="JFFI" className="competition-image" />
          <h3>JFFI - 1ère place au premier cycle (Printemps 2024)</h3>
          <p>
            Le 29 et 30 avril dernier j’ai participé à la Journée Francophone des Femmes en Informatique (JFFI). Cet événement inspirant m’a permis de rencontrer plusieurs femmes exceptionnelles et de renforcer mes compétences en cybersécurité.
            <br />
            Tout a débuté par une compétition de type Capture The Flag (CTF) d’une durée de sept heures. Aux côtés de mes coéquipières, nous avons fièrement représenté l’Université de Sherbrooke. Nous avons réussi à nous hisser sur le podium en remportant la première place dans la catégorie premier cycle.
            <br />
            Je tiens à exprimer ma gratitude envers tous les organisateurs de la JFFI, ainsi que l’École de technologie supérieure (ÉTS) pour avoir accueilli cet événement.
          </p>
        </div>

        <div className="competition-item">
          <img src={cs} alt="CS Games" className="competition-image" />
          <h3>CS Games - 3e place (Hiver 2024)</h3>
          <p>
            En mars dernier, j'ai eu l'honneur de participer aux CS Games 2024 avec la délégation de l'Université de Sherbrooke. Cet événement, qui s'est tenu à ÉTS, a réuni plus de 240 étudiants répartis en 22 équipes provenant de douze universités canadiennes.
          </p>
          <p>
            J’ai eu la chance de participer aux compétitions d’Info-Théo, Triathlon de développement et Programmation extrême. Pour un premier CS Games, je n’aurais pas pu mieux apprécier mon expérience et ce ne sera pas la dernière. Ce sont des moments comme ceux-ci qui renforcent ma passion pour l'informatique et mon désir de continuer à exceller dans ce domaine. Notre équipe a réussi à se hisser sur le podium en remportant la troisième place au classement général.
          </p>
          <p>
            Je tiens à exprimer ma profonde gratitude aux organisateurs et bénévoles qui ont rendu cet événement possible. Un grand merci également à Jeux et Défis Informatiques de Sherbrooke (JDIS) et à ses commanditaires pour leur soutien indéfectible.
          </p>
        </div>
      </div>

      <div className="first-two-competitions">
        <div className="competition-item">
          <img src={jffi} alt="Cybersci" className="competition-image" />
          <h3>Cybersci – Automne 2024</h3>
          <p>
            Cybersci est un événement de cybersécurité qui attire des participants de partout au Québec. Au cours de cette compétition, les participants peuvent tester leurs compétences en hacking éthique et résoudre des défis liés à la sécurité informatique. C'est une excellente opportunité pour les étudiants de se mesurer à des situations réelles tout en apprenant les meilleures pratiques en cybersécurité.
          </p>
        </div>

        <div className="competition-item">
          <img src={hackfest} alt="Hackfest" className="competition-image" />
          <h3>Hackfest - 18e place sur 35 équipes (Automne 2024)</h3>
          <p>
            Hackfest est l'un des plus grands événements de cybersécurité au Canada. Cet événement de type Capture The Flag (CTF) réunit des participants du monde entier pour résoudre des défis de sécurité informatique. En 2024, j'ai participé à Hackfest avec mon équipe et avons réussi à obtenir la 18e place parmi 35 équipes. C'était une occasion unique de renforcer mes compétences en sécurité et de collaborer avec des experts du domaine.
          </p>
        </div>
      </div>

      <div className="first-two-competitions">
        <div className="competition-item">
          <img src={nsec} alt="Nsec" className="competition-image" />
          <h3>NorthSec - Participation (Printemps 2024)</h3>
          <p>
            NorthSec est une compétition de cybersécurité prestigieuse qui se déroule chaque année à Montréal. C'est un événement de type Capture The Flag (CTF) où des équipes de hackers éthiques résolvent des défis techniques liés à la sécurité informatique. J'ai eu le privilège d'y participer en 2024 et de tester mes compétences dans un environnement compétitif avec d'autres passionnés de cybersécurité.
          </p>
        </div>

        <div className="competition-item">
          <h3>United CTF - Automne 2023-2024</h3>
          <p>
            United CTF est un événement en ligne qui rassemble des participants du monde entier pour résoudre des défis de cybersécurité. Cette compétition est idéale pour les personnes qui souhaitent tester leurs compétences en hacking éthique dans une série de défis allant de la cryptographie à l'exploitation de vulnérabilités. J'ai participé à cette compétition durant l'automne 2023-2024 et elle m'a permis de développer davantage mes compétences en sécurité.
          </p>
        </div>
      </div>

      <div className="competition-item">
      <h3>JDIS Games - Été 2024 (Organisation), Été 2023 (Participation, Top 10)</h3>
  <p>
    Les JDIS Games sont organisés par l’association Jeux et Défis Informatiques de Sherbrooke (JDIS). Lors de cet événement, les participants développent des bots informatiques pour interagir dans un jeu et obtenir le maximum de points possible. En 2024, j'ai eu le plaisir d'être l'une des organisatrices, ce qui m'a permis de coordonner l'événement et de travailler avec de nombreux bénévoles. En 2023, j'ai participé avec mon équipe et avons fièrement terminé dans le Top 10. Cet événement est une occasion unique de combiner la programmation et le jeu dans un cadre compétitif, où chaque équipe cherche à créer le bot le plus performant.
  </p>
      </div>

    </div>
  );
}

export default Competitions;
