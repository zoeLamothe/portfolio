import React from 'react';
import './CSS/CV.css';
import e from './images/Escalade.jfif';
import e1 from './images/Escalade1.jfif';
import e2 from './images/Escalade2.jfif';

function Hobbies() {
  return (
    <div className="hobbies-container">
      <section className="hobbies-section">
        <h2 className="section-title">Loisirs et intérêts</h2>
        <ul className="hobbies-list">
          <li className="hobby-item">
            <h3>Escalade</h3>
            <div className="hobby-images">
              <img src={e} alt="Escalade 1" className="hobby-image" />
              <img src={e1} alt="Escalade 2" className="hobby-image" />
              <img src={e2} alt="Escalade 3" className="hobby-image" />
            </div>
          </li>
          <li className="hobby-item">Camping</li>
          <li className="hobby-item">Ski</li>
          <li className="hobby-item">Jeux de société</li>
        </ul>
      </section>
    </div>
  );
}

export default Hobbies;
