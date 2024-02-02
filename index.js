const express = require('express');
const app = express();
const port = 3000;

app.get('/crée', Tweet)

app.get('/lire', (req, res) => {
    res.status(200).send('Bonjour KADEA')
})

app.post('/ajour', (req, res) => {
    res.status(200).send('Bonjour KADEA')
})

app.delete('/supprimer', (req, res) => {
    res.status(200).send('Bonjour KADEA')
})


app.listen(port, () => {
    console.log('API for Twiter');
})