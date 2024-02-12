const twiterAPI = require('../Models/tweetModel.js');
const tweets = twiterAPI.tweets;
const users = twiterAPI.users;
const multer = require('multer')
// let likeTweet = parseInt(tweets.favorites);
let likeTweet = 56;

const tweetController = {
    postTweet: (req, res) => {
        const { text, idUser } = req.body;
        // if (!text || !image || !idUser) {
        //     return res.status(400).json({ error: 'Tweet vide, Publiez un text ou une image' });
        // }
        const newTweet = {
            date: new Date(),
            "favorites": "0",
            id: tweets.length + 1,
            idUser,
            "replies": "0",
            "retweets": "0",
            text,
            image : req.file.path,
        };
        tweets.push(newTweet);
        res.status(201).send(tweets);
    },

    putLike: (req, res) => {
        const idLike = req.params.id;
        likeTweet += 1;
        res.status(201).json('Vous venez de likez ce tweet, il possede ' + likeTweet + ' likes');
        if (!likeTweet) {
            likeTweet = 0;
            return res.status(400).json({ error: 'Like : ' + likeTweet });
        }
    },

    putUnLike: (req, res) => {
        const idLike = req.params.id;
        likeTweet -= 1;
        res.status(201).json('Vous avez deja likez ce tweet, il possede ' + likeTweet + ' likes');
        if (!likeTweet) {
            likeTweet = 0;
            return res.status(400).json({ error: 'Like : ' + likeTweet });
        }
    },

    deleteTweetId: (req, res) => {
        const id = req.params.id;
        tweets.splice(id - 1, 1);
        res.status(201).json(tweets);
    }
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'ImageUpload')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
module.exports = {tweetController, storage};

