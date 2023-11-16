const dotenv = require('dotenv');
dotenv.config();

const config = {
    PORT: process.env.PORT,
    MAIL_HOST : process.env.MAIL_HOST,
    MAIL_PORT : process.env.MAIL_PORT,
    MAIL_USER : process.env.MAIL_USER,
    MAIL_PASS : process.env.MAIL_PASS,
    DESTINATARIOS : process.env.DESTINATARIOS
};

Object.keys(config).forEach((key) => {
    if (!config[key]) {
        throw new Error(`La variable de entorno ${key} no está definida`);
    }
});

module.exports = config;