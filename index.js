// implement your API here
const express = require('express');

const db = require("./data/db.js");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
    res.send("It's alive!!!");
});

server.get("/api/users", (req, res) => {
    db.users
        .find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(({ code, message }) => {
            res.status(code).json({ success: false, message })
        });
});

server.post('/api/users', (req, res) => {
    const { name, bio, created_at, updated_at } = req.body;
    
    db.users
        .add(userInfo)
        .then(user => {
            res.status(201).json({success: true, user});
        })
        .catch(({ code, message }) => {
            res.status(code).json({success: false, message })
        });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`\n*** Server listening on port ${PORT} ***\n`);
});