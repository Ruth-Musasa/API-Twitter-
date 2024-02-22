const express = require('express');
const twiterAPI = require('./Models/tweetModel');
const tweetRoute = require('./Routes/tweetRoute.js')
const userRoute = require('./Routes/userRoute.js')
const multer = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
const passport = require('passport');
const cors = require('cors')
const path = require('path')
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors())
// app.use(passport.initialize());
app.use('/tweets', tweetRoute)
app.use('/users', userRoute)
// app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.static(path.join(__dirname, "ImageUpload")))
app.listen(port, () => {
  console.log(`Votre serveur pour API de Twiter est lancé sur http://localhost:${port}`);
});
