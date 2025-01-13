import React from 'react';
import './CSS/CV.css';

function CV() {
  return (
    <div className="cv-container">
      <section>
        <h2>Mon CV</h2>
        <p>Voici mon CV professionnel. Vous pouvez le visualiser directement ici ou le télécharger.</p>
        <div className="pdf-container">
          <embed
            src="/CV-ZoéLamothe-Morin.pdf" 
            type="application/pdf"
            width="100%" 
            height="600px"
            title="Mon CV"
          />
        </div>
        <div className="download-link">
        <p>Vous pouvez également télécharger mon CV en cliquant sur le lien ci-dessous :</p>
          
          <a href="/CV-ZoéLamothe-Morin.pdf" download="CV-ZoéLamothe-Morin.pdf">Télécharger mon CV</a>
        </div>
      </section>
    </div>
  );
}

export default CV;
