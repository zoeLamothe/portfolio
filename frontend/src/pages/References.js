import React from 'react';
import './CSS/CV.css';
import prod from './images/Productique.png';
import udes from './images/udes.png';

function References() {
  return (
    <div className="references-container">
      <h2>Références</h2>
      <div className="reference-item">
        <h3>Productique Québec</h3>
        <img src={prod} alt="Productique Québec" className="reference-image" />
        <p>David Brodeur (Patron) | 819-570-4702</p>
      </div>
      <div className="reference-item">
        <h3>Université de Sherbrooke</h3>
        <img src={udes} alt="Université de Sherbrooke" className="reference-image udes-image" />

        <p>Michael Blondin (Professeur) | michael.blondin@usherbrooke.ca</p>
      </div>
    </div>
  );
}

export default References;
