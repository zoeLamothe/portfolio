import React from 'react';
import './CSS/Home.css'; 

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
          <a href="/education" className="home-link">Éducation</a>
          <a href="/experience" className="home-link">Expériences</a>
          <a href="/projects" className="home-link">Projets</a>
          <a href="/skills" className="home-link">Compétences</a>
          <a href="/competitions" className="home-link">Compétitions Informatiques</a>
          <a href="/benevolat" className="home-link">Bénévolat</a>
          <a href="/references" className="home-link">Références</a>
          <a href="/hobbies" className="home-link">Loisirs</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
