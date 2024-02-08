const express = require('express');
const twiterAPI = require('./Models/tweetModel');
const tweetRoute= require('./Routes/tweetRoute.js')
const userRoute=require('./Routes/userRoute.js')
const app = express();
const port = 3000;
app.use(express.json());
app.use('/tweets', tweetRoute)
app.use('/users', userRoute)


app.listen(port, () => {
  console.log(`Votre serveur pour API de Twiter est lancé sur http://localhost:${port}`);
});