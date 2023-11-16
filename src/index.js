const express = require('express');
const { PORT } = require('./../config');
const sendEmail = require('./controllers/mail.controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.post('/send-email', sendEmail);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    }
);