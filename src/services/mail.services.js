const nodemailer = require('nodemailer');
const { MAIL_USER, MAIL_PASS, MAIL_HOST, MAIL_PORT, DESTINATARIOS } = require('./../../config');

const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS
    },
    requireTLS: true,
    tls: {
        rejectUnauthorized: false,
    }
});

// transporter.verify().then(() => {
//     console.log('Ready for send emails');
// });
const sendMail = async (name,sender, subject, message) => {
    try{
        let html = `
        <div style="background-color: #f2f2f2; padding: 20px; border-radius: 10px;">
            <h1>Hola Encoders, tienen un nuevo mensaje!</h1>
            <h3>Nombre:</h3>
            <h2 style="background-color: white; padding: 20px; border-radius: 10px;">
                ${name}
            </h2>
            <h3>Correo:</h3>
            <h2 style="background-color: white; padding: 20px; border-radius: 10px;">
                ${sender}
            </h2>
            <h3>Mensaje:</h3>
            <h2 style="background-color: white; padding: 20px; border-radius: 10px;">
                ${message}
            </h2>
        </div>
        `;

        await transporter.sendMail({
            from: MAIL_USER,
            to: DESTINATARIOS,
            subject: subject,
            html: html, 
        });
        console.log('Mail sent 📧');
        return {
            status: 'ok',
            message: 'Email sent'
        }
    }catch(error){
        return {
            status: 'error',
            message: error.message
        }
    }
}

module.exports = sendMail;