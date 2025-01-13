import React from 'react';
import profileImage from './1014.jpg'; // Assure-toi que ton image est dans le bon dossier.

function ProfileSection() {
  return (
    <div className="flex flex-col items-center justify-start space-y-6 p-8 bg-gray-100 rounded-lg shadow-md">
      {/* Image de profil */}
      <img src={profileImage} alt="Profile" className="w-37 h-37 rounded-full object-cover" />

      {/* Informations personnelles */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Zoe Lamothe-Morin</h2>
        <p className="text-lg text-gray-600">Bachelière en Informatique</p>
        <p className="text-md text-gray-600">Email : zoelamothemorin@gmail.com</p>
        <p className="text-md text-gray-600">Téléphone : 438 830 8464</p>
        <p className="text-md text-gray-600">Linked : www.linkedin.com/in/zoé-lamothe-morin-7b74a5309</p>
      </div>
    </div>
  );
}

export default ProfileSection;
