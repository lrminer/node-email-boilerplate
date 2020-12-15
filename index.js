require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const yourEmail = process.env.EMAIL

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: yourEmail,
        pass: process.env.PASSWORD
    }
});


app.post('/api/email', (req, res) => {

    const mailOptions = {
        from: yourEmail,
        to: yourEmail,
        subject: `${req.body.name} left a message`,
        text: `
        A new person filled out the form...
        Email: ${req.body.email}
        Name: ${req.body.name}
        Phone: ${req.body.phone}
        Message: ${req.body.message}
`
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.json({message: "Email sent"})
})

app.listen(2000, () => {
    console.log('app listening on port 2000')
})