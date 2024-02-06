const twiterAPI = require('../Models/tweetModel.js')
const tweets = twiterAPI.tweets;
const users = twiterAPI.users;

const tweetController = {
    getUse: (req, res) => {
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
    getTweet: (req, res) => {
        const { text, image, idUser } = req.body;
        if (!text || !image || !idUser) {
            return res.status(400).json({ error: 'Tweet vide, Publiez un text ou une image' });
        }
        const newTweet = {
            date: new Date(),
            "favorites": "0",
            id: tweets.length + 1,
            idUser,
            "replies": "0",
            "retweets": "0",
            text,
            image,

        };
        tweets.push(newTweet);
        res.status(201).json(newTweet);
    },
    getTweetId: (req, res) => {
        const tweetId = req.params.id;
        // res.json({ id: tweetId, name: 'Exemple' })
        try {
            const Tweet = tweets.getTweetById(tweetId)
            res.json(Tweet)
        } catch (error) {
            console.log(error);
            res.status(501)
        }

    },
    putTweet: (req, res) => {
        const { favorites } = req.body;
        if (favorites) {
            const newTweet = {
                favorites: tweets.favorites + 1
            }
        }
    },
    deleteTweetId: (req, res) => {
        const id = req.params.id;
        if (id == newUser.idUser) {
            users.slice(id, id + 1);
            res.status(201).json(users);
        }

    }
}

module.exports = tweetController;


