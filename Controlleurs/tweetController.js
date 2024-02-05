const twiterAPI = require('../Models/tweetModel.js')
const tweets = twiterAPI;

const tweetController = {
    getTweet: (req, res) => {
        const { source, text } = req.body;
        if (!source || !text) {
            return res.status(400).json({ error: 'Le nom d\'utilisateur et le texte du tweet sont requis.' });
        }
        const newTweet = {
            "author_avatar": "https://pbs.twimg.com/profile_images/980157462887256064/CcnUIYrA_400x400.jpg",
            source,
            date: new Date(),
            "favorites": "92746",
            id:11 ,
            "isVerified": true,
            "replies": "24785",
            "retweets": "16287",
            text,
            "image": "https://"

        };
        tweets.push(newTweet);
        res.status(201).json(newTweet);
    },
    getTweetId: (req, res) => {
        const tweetId = req.params.id;
        try {
            const Tweet = twiterAPI.getTweetById(tweetId)
            res.json(Tweet)
        } catch (error) {
            console.log(error);
            res.status(501)
        }

    },
    putTweetId: (req, res) => {
        const tweetId = req.params.id;
        try {
            const Tweet = twiterAPI.getTweetById(tweetId)
            res.json(Tweet)
        } catch (error) {
            console.log(error);
            res.status(501)
        }

    },
    deleteTweetId: (req, res) => {
        tweets.pop();
        res.status(201).json(tweets);
    }
}

module.exports = tweetController;


