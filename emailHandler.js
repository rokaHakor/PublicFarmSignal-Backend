require('dotenv').config();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendPasswordEmail = function (emailAddress, link) {
    const mailOptions = {
        from: process.env.EMAIL,
        to: emailAddress,
        subject: 'FarmSignal Password Recovery',
        text: 'Hello!\nHere is your password recovery link: ' + link + '\n Thank you, \n\n FarmSignal'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const sendNotificationEmail = function (emailAddress, notif) {
    const mailOptions = {
        from: process.env.EMAIL,
        to: emailAddress,
        subject: 'FarmSignal Notification',
        text: 'Hello!\nThis is a notification regarding your plant.' + '\n Thank you,\n\n FarmSignal'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendPasswordEmail,
    sendNotificationEmail
};