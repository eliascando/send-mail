const sendMail = require('./../services/mail.services');

const sendEmail = async(req, res) => {
    const { name, email, subject, message } = req.body;
    let sended = await sendMail(name, email, subject, message);

    if(!sended){
        res.status(500).json({ message: 'Error sending email' });
    }else{
        res.status(200).json({ message: 'Email sent' });
    }
}

module.exports = sendEmail;