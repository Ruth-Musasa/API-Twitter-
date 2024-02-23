const twiterAPI = require('../Models/tweetModel.js');
const tweets = twiterAPI.tweets;
const multer = require('multer')
// let likeTweet = parseInt(tweets.favorites);
let likeTweet = 56;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'ImageUpload');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});
const upload = multer({ storage: storage });
const tweetController = {
    postTweet: (req, res) => {
        upload.single('img')(req, res, async function (err) {
            if (err) {
                console.error("Erreur de téléchargement de l'image:", err);
                return res.status(500).json({ error: "Erreur de téléchargement de l'image" });
            }
            const { text } = req.body;
            try {
                await prisma.User.create({
                    data: {
                        text,
                        image: req.file.path,
                    },
                });
                res.status(201).json({ message: 'Tweet posté avec succès' });
            } catch (error) {
                console.error("Erreur du post:", error);
                res.status(500).json({ error: "Erreur du post" });
            }
        });
    },

    putLike: (req, res) => {
        const idLike = req.params.id;
        likeTweet += 1;
        res.status(201).json('Vous venez de likez ce tweet, il possede ' + likeTweet + ' likes');
        if (!likeTweet) {
            likeTweet = 0;
            return res.status(400).json({ error: 'Like : ' + likeTweet });
        }
    },

    putUnLike: (req, res) => {
        const idLike = req.params.id;
        likeTweet -= 1;
        res.status(201).json('Vous avez deja likez ce tweet, il possede ' + likeTweet + ' likes');
        if (!likeTweet) {
            likeTweet = 0;
            return res.status(400).json({ error: 'Like : ' + likeTweet });
        }
    },

    deleteTweetId: (req, res) => {
        const id = req.params.id;
        tweets.splice(id - 1, 1);
        res.status(201).json(tweets);
    }
}

module.exports = { tweetController, storage };