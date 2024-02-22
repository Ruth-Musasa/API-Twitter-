const express = require('express');
const router = express.Router();
const twiterAPI = require('../Models/tweetModel.js');
const tweetController = require('../Controlleurs/tweetController.js');
const userController = require('../Controlleurs/userController.js');
const passport = require('passport');
// passport.use(userController.config);
router.post('/signin', userController.postUseSignin);
router.post('/login', userController.postUseLogin);
router.delete('/:id', userController.deleteUserId);
router.get('/', userController.getUser, (req, res) => {
    res.json({ message: 'Acces protegé', user: req.user });
});
module.exports = router;
