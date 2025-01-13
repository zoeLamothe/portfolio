const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

const contactRoutes =require('./routes/contact');

app.use('/api/contact', contactRoutes);

const PORT =process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});

const { Sequelize } = require('sequelize');
dotenv.config(); // Charger les variables d'environnement

// Créer une instance de Sequelize pour connecter à PostgreSQL
const sequelize = new Sequelize(process.env.PG_URI);

// Tester la connexion à la base de données
sequelize.authenticate()
.then(() => {
    console.log('Connexion à PostgreSQL réussie');
})
.catch((error) => {
    console.error('Erreur de connexion à PostgreSQL:', error);
});
