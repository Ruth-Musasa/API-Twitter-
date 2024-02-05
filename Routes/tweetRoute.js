const express = require('express')
const router = express.Router()
const twiterAPI = require('../Models/tweetModel.js')
const tweetController = require('../Controlleurs/tweetController.js')
const tweets = twiterAPI;

router.get('/', (req, res) => {
    res.json(tweets);
});
router.post('/', tweetController.getTweet);
// router.post('/', tweetController.getTweet);
// router.post('/', tweetController.getTweet);

module.exports = router;


