import React, { useEffect, useState } from 'react';

function CV() {
  const [hash, setHash] = useState('');

  useEffect(() => {
    // Met à jour l'état de la section à afficher en fonction du hash dans l'URL
    setHash(window.location.hash);
  }, []);

  return (
    <div>
      <h1>Mon CV</h1>

      <div className="cv-sections">
        {/* Section Éducation */}
        {hash === "#education" && (
          <div id="education">
            <h2>Éducation</h2>
            <p>Ton parcours éducatif ici...</p>
          </div>
        )}

        {/* Section Expérience */}
        {hash === "#experience" && (
          <div id="experience">
            <h2>Expériences</h2>
            <p>Ton expérience professionnelle ici...</p>
          </div>
        )}

        {/* Section Projets */}
        {hash === "#projects" && (
          <div id="projects">
            <h2>Projets</h2>
            <p>Projets réalisés ici...</p>
          </div>
        )}

        {/* Section Compétences */}
        {hash === "#skills" && (
          <div id="skills">
            <h2>Compétences</h2>
            <p>Compétences techniques ici...</p>
          </div>
        )}

        {/* Section Références */}
        {hash === "#references" && (
          <div id="references">
            <h2>Références</h2>
            <p>Références professionnelles ici...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CV;
