const express = require('express')
const router = express.Router()
const twiterAPI = require('../Models/tweetModel.js')
const {tweetController, storage} = require('../Controlleurs/tweetController.js')
const multer = require('multer')
const upload = multer({ storage: storage })
router.get('/', (req, res) => {
    res.json(twiterAPI.tweets);
});
router.delete('/:id', tweetController.deleteTweetId);
router.put('/like/:id', tweetController.putLike);
router.put('/unlike/:id', tweetController.putUnLike);
router.post('/', upload.single('img'), tweetController.postTweet);

module.exports = router;


