const express = require('express');
const bodyParser = require('body-parser');
const twiterAPI = require('./Models/tweetModel');
const tweetRoute= require('./Routes/tweetRoute.js')
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/tweet', tweetRoute)

app.listen(port, () => {
  console.log(`Votre serveur pour API de Twiter est lancé sur http://localhost:${port}`);
});