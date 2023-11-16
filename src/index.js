const express = require('express');
const { PORT } = require('./../config');
const sendEmail = require('./controllers/mail.controller');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/health', (res) => {
    res.status(200).json({ 
        status: 'ok',
        message: 'Server is running' 
    });
});

app.post('/send-email', sendEmail);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    }
);