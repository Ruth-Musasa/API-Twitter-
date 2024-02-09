const express = require('express');
const router = express.Router();
const twiterAPI = require('../Models/tweetModel.js');
const tweetController = require('../Controlleurs/tweetController.js');
const userController= require('../Controlleurs/userController.js');
router.get('/', (req, res) => {
    res.json(twiterAPI.users);
});
router.post('/signin', userController.postUseSignin);
router.post('/login', userController.postUseLogin);
router.delete('/:id', userController.deleteUserId);
module.exports = router;
