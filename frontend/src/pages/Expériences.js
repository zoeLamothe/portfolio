import React from 'react';

function Expériences() {
  return (
    <Main title="Mon CV" description="Bienvenue sur ma page CV">
          <div className="cv-container">
    
            <section>
              <h2>Expériences</h2>
              <h3>Stagiaire de recherche en IoT - Productique Québec | Été 2023</h3>
              <ul>
                <li>Révision du code en C# pour la récupération des mesures d'un pied à coulisse et leur conversion au format JSON.</li>
                <li>Réécriture du code en Python et synchronisation avec une base de données MongoDB.</li>
                <li>Développement d'un code de synchronisation entre Netbox et MongoDB.</li>
                <li>Déploiement sur un environnement Docker.</li>
                <li>Collaboration avec des lunettes de réalité augmentée pour la prise de mesures en temps réel.</li>
              </ul>
    
              <h3>Stagiaire scientifique - Ville de Montréal | Été 2022</h3>
              <ul>
                <li>Visite des citoyens pour transmettre des informations sur les entrées de service en plomb.</li>
                <li>Échantillonnage et analyse de l'eau au robinet à l'aide d'appareils portatifs.</li>
                <li>Compilation des résultats dans une base de données.</li>
              </ul>
    
              <h3>Animatrice de jeux de société - Randolph Centropolis Laval | 2020 – 2023</h3>
              <h3>Tutorat en physique et mathématiques - Cégep de Saint-Laurent | 2019 – 2021</h3>
              <h3>Volontariat international - Assemblée communautaire Miravalles, Mexique | Été 2019</h3>
              <ul>
                <li>Lombricompostage, pisciculture, thermo fusion des plastiques PET, et maintien de serres agricoles.</li>
              </ul>
            </section>
    
          </div>
        </Main>
  );
}

export default Expériences;
