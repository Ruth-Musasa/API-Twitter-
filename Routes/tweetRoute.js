const express = require('express')
const router = express.Router()
const twiterAPI = require('../Models/tweetModel.js')
const tweetController = require('../Controlleurs/tweetController.js')

router.get('/', (req, res) => {
    res.json(twiterAPI.tweets);
});
router.post('/', tweetController.postTweet);
router.delete('/:id', tweetController.deleteTweetId);
router.put('/like/:id', tweetController.putLike);
router.put('/unlike/:id', tweetController.putUnLike);


module.exports = router  ;


