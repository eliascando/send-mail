const sendMail = require('./../services/mail.services');

const sendEmail = async(req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !suject || !message){
        res.status(400).json({
            status: 'error',
            message: 'Bad request'
        });
        return;
    }
    
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
