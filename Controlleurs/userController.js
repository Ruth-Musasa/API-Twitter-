const twiterAPI = require ('../Models/tweetModel.js')
const tweets = twiterAPI.tweets;
const users = twiterAPI.users;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userController = {
    getUser: async (req, res, next) => {
        const token = req.body.token;
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
        const { name, password, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            await prisma.User.create({
                data: {
                    email,
                    name,
                    password: hashedPassword,
                },
            });
            res.status(201).json({ message: 'Utilisateur enregistré avec succes' });
        } catch (error) {
            console.error("Erreur d'enregistrement:", error);
            res.status(500).json({ error: "Erreur d'enregistrement" });
        }
    },

    postUseLogin: async (req, res) => {
        const {email, password } = req.body;
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
            const token = jwt.sign({ id: user.id }, 'code Secret');
            res.json({ token });
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

module.exports = userController;
