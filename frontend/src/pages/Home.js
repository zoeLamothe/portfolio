import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenue sur mon site</h1>
        <p>Je suis Zoé Lamothe-Morin, spécialiste en simulation manufacturière et développement informatique.</p>
      </header>

      <section className="home-intro">
        <h2>À propos de moi</h2>
        <p>
          Passionnée par la technologie et l'optimisation des processus, je combine mes compétences en 
          programmation et en analyse pour offrir des solutions innovantes. Explorez mon site pour en apprendre 
          davantage sur mes projets, mon expérience et mes compétences.
        </p>
      </section>

      <section className="home-links">
        <h2>Explorez</h2>
        <div className="links-container">
          <a href="/cv" className="home-link">Mon CV</a>
          <a href="/experiences" className="home-link">Expériences</a>
          <a href="/projects" className="home-link">Projets</a>
          <a href="/references" className="home-link">Références</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
