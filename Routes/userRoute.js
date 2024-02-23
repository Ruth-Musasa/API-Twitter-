const express = require('express');
const router = express.Router();
const { userController, storage } = require('../Controlleurs/userController.js');
router.post('/signin', userController.postUseSignin);
router.post('/login', userController.postUseLogin);
router.delete('/:id', userController.deleteUserId);
router.get('/:id', userController.getUser, (req, res) => {
    res.json({ message: 'Acces protegé', user: req.user });
});
module.exports = router;
