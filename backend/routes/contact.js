const express = require('express');

const nodemailer = require('nodemailer');

const router = express.Router();


router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL,
            subject: `Message de ${name}`,
            text: message,
        });
        res.status(200).send('Message envoyé !');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de l\'envoi du message.');
    }
});

module.exports = router;