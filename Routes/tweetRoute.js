const express = require('express')
const router = express.Router()
const twiterAPI = require('../Models/tweetModel.js')
const tweetController = require('../Controlleurs/tweetController.js')
router.get('/tweets', (req, res) => {
    res.json(twiterAPI.tweets);
});
router.get('/users', (req, res) => {
    res.json(twiterAPI.users);
});
router.post('/tweet', tweetController.getTweet);
router.post('/user', tweetController.getUse);
router.get('/:tweetId', tweetController.getTweetId);
router.put('/', tweetController.putTweet);
router.delete('/:id', tweetController.deleteUserId);
router.delete('/:id', tweetController.deleteTweetId);
module.exports = router;


