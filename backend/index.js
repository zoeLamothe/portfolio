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