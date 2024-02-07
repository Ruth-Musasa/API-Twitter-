const twiterAPI = require('../Models/tweetModel.js')
const tweets = twiterAPI.tweets;
const users = twiterAPI.users;

const tweetController = {
    postTweet: (req, res) => {
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
        res.status(201).json(tweets);
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
        // if (id == newTweet.id) {
            tweets.splice(id-1, 1);
            res.status(201).json(tweets);
        // }
    }
}

module.exports = tweetController;


