const sendMail = require('./../services/mail.services');

const sendEmail = async(req, res) => {
    const { name, email, subject, message } = req.body;
    let sended = await sendMail(name, email, subject, message);

    if(!sended){
        res.status(500).json({ 
            status: 'error',
            message: 'Error sending email' 
        });
    }else{
        res.status(200).json({ 
            status: 'ok',
            message: 'Email sent' 
        });
    }
}

module.exports = sendEmail;