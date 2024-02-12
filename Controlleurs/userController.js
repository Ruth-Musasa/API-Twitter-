const twiterAPI = require('../Models/tweetModel.js')
const tweets = twiterAPI.tweets;
const users = twiterAPI.users;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userController = {
    postUseSignin: (req, res) => {
        const { username, password, src_avatar } = req.body;
        const existeUser = users.find(user => user.username === username);
        if (existeUser || (!username && !password && !src_avatar)) {
            return res.status(400).json({ error: "Erreur d'enregistrement, veillez verifier vos informations" });
        }
        // else if (!username || !password || !src_avatar) {
        //     return res.status(400).json({ error: "Votre utilisateur n'a pas etait enregistrée veillez remplir tous les elements demandés" });
        // }
        bcrypt.hash(password, 10, (err, passWordHached) => {
            if (err) {
                console.error("Une erreur s'est passée lors du hashing:", err);
                res.status(500).json({ error: 'Erreur du serveur' });
                return;
            }
            const newUser = {
                src_avatar,
                username,
                idUser: users.length + 1,
                "isVerified": true,
                password: passWordHached
            };
            users.push(newUser);
            res.status(201).json(newUser);
        });
    },

    postUseLogin: (req, res) => {
        const { username, password } = req.body;
        const user = users.find(user => user.username === username);
        if (!user) {
            return res.status(401).json({ error: "Nom d'utilisateur ou mot de passe invalide" });
        }
        bcrypt.compare(password, user.password, (err, validPassword) => {
            if (err || !validPassword) {
                return res.status(401).json({ error: "Nom d'utilisateur ou mot de passe invalide" });
            }
            user.token = jwt.sign({ username }, 'code secret');
            user.password = null
            res.json(user);
        });
    },
    deleteUserId: (req, res) => {
        const id = req.params.id;
        users.splice(id - 1, 1);
        res.status(201).json(users);
    },
}

module.exports = userController;
