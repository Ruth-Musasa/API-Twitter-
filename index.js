const express = require('express');
const bodyParser = require('body-parser');
const tweetRoute = require('./Routes/tweetRoute.js')
const userRoute = require('./Routes/userRoute.js')
const multer = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
const cors = require('cors')
const path = require('path')
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors())
app.use('/tweets', tweetRoute)
app.use('/users', userRoute)
app.use(express.static(path.join(__dirname, "ImageUpload")))
app.listen(port, () => {
  console.log(`Votre serveur pour API de Twiter est lancé sur http://localhost:${port}`);
});
