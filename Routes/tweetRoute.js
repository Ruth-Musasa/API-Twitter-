const express = require('express')
const router = express.Router()
const twiterAPI = require('../Models/tweetModel.js')
const tweetController = require('../Controlleurs/tweetController.js')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'ImageUpload')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({ storage: storage })
router.get('/', (req, res) => {
    res.json(twiterAPI.tweets);
});
router.delete('/:id', tweetController.deleteTweetId);
router.put('/like/:id', tweetController.putLike);
router.put('/unlike/:id', tweetController.putUnLike);
router.post('/', upload.single('img'), tweetController.postTweet);

module.exports = router;


