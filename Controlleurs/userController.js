const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const multer = require('multer')
const prisma = new PrismaClient();
const users = prisma.User;
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'ImageUpload');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
    }
});
const upload = multer({ storage: storage });
const userController = {
    getUser: async (req, res, next) => {
        const token = req.params.id;
        if (!token) {
            return res.status(401).json({ error: 'Non autorisé' });
        }
        try {
            const decoded = jwt.verify(token, 'code Secret');
            const user = await prisma.User.findUnique({
                where: {
                    id: decoded.id
                }
            });
            if (!user) {
                throw new Error();
            }
            req.user = user;
            next();
        } catch (error) {
            return res.status(401).json({ error: 'Non autorisé' });
        }
    },
    postUseSignin: async (req, res) => {
        upload.single('profil')(req, res, async function (err) {
            if (err) {
                console.error("Erreur de téléchargement de l'image:", err);
                return res.status(500).json({ error: "Erreur de téléchargement de l'image" });
            }
            const { name, password, email } = req.body;
            const imgUpload = 'http://localhost:3000/' + path.basename(req.file.path);
            const hashedPassword = await bcrypt.hash(password, 10);
            try {
                await prisma.User.create({
                    data: {
                        profil: imgUpload,
                        email,
                        name,
                        password: hashedPassword,
                    },
                });
                res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
            } catch (error) {
                console.error("Erreur d'enregistrement:", error);
                res.status(500).json({ error: "Erreur d'enregistrement" });
            }
        });
    },
    postUseLogin: async (req, res) => {
        const { email, password } = req.body;
        console.log(req.body);
        try {
            const user = await prisma.User.findUnique({
                where: {
                    email,
                }
            });
            console.log(user);
            if (!user) {
                return res.status(401).json({ error: 'Donnée invalide' });
            }
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(401).json({ error: 'Donnée invalide' });
            }
            const token = jwt.sign(
                { id: user.id },
                'code Secret',
                { expiresIn: '24h' }
            );
            res.status(200).json({ token, id: user.id });
        } catch (error) {
            console.error("Erreur d'authentification:", error);
            res.status(500).json({ error: "Erreur d'authentification" });
        }
    },
    deleteUserId: (req, res) => {
        const id = req.params.id;
        users.splice(id - 1, 1);
        res.status(201).json(users);
    },
}

module.exports = { userController, storage };





