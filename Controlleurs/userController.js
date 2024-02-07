const twiterAPI = require('../Models/tweetModel.js')
const tweets = twiterAPI.tweets;
const users = twiterAPI.users;

const userController = {
    postUse: (req, res) => {
        const { source , src_avatar } = req.body;
        if (!source || !src_avatar) {
            return res.status(400).json({ error: "Votre utilisateur n'a pas etait enregistrée veillez remplir tous les elements demandés" });
        }
        const newUser = {
            src_avatar,
            source,
            idUser: users.length + 1,
            "isVerified": true,
        };
        users.push(newUser);
        res.status(201).json(newUser);
    },
    deleteUserId: (req, res) => {
        const id = req.params.id;
            users.splice(id-1, 1);
            res.status(201).json(users);
    },
}

module.exports = userController;
