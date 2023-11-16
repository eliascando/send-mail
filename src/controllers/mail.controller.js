const sendMail = require('./../services/mail.services');

const sendEmail = async(req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message){
        res.status(400).json({
            status: 'error',
            message: 'Bad request'
        });
        return;
    }
    
    let sended = await sendMail(name, email, subject, message);

    if(sended.status !== 'ok'){
        res.status(500).json({ 
            status: 'error',
            message: 'Internal server error',
            detail: sended.message
        });
    }else{
        res.status(200).json({ 
            status: 'ok',
            message: 'Email sent'
        });
    }
}

module.exports = sendEmail;
