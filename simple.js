require('dotenv').config();
const nodemailer = require('nodemailer');

const email = process.env.EMAIL

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: process.env.PASSWORD
    }
});

const mailOptions = {
    from: email,
    to: email,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});