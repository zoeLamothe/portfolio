import React from 'react';
import './CSS/CV.css';  


function Skills() {
  return (
    <div>
      <div className="cv-container">
       

        <section>
          <h2>Compétences</h2>
          <h3>Linguiste</h3>
          <p>Bilingue (Français et Anglais)</p>
          <h3>Informatique</h3>
          <ul className="skills-list">
            <li>Langages : C++, C, C#, Python, R, Java, SQL, MongoDB, Armv8, Racket, OpenGL, HTML, CSS</li>
            <li>Outils : GitHub, Docker, AnyLogic, DevOps</li>
            <li>Méthodes agiles : Scrum, Kanban</li>
            <li>Compétences en base de données, déploiement de système, programmation fonctionnelle et développement web</li>
          </ul>
        </section>

      </div>
    
    </div>

  );
}

export default Skills;
