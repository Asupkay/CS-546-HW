const express = require('express');
const router = express.Router();

const aboutMeJSON = {
    "name": "Alex Supkay",
    "biography": "Here",
    "favoriteShows": ["nice", "nicer", "nicest"],
    "hobbies": ["array", "of", "hobbies"]
};

router.get("/", (req, res) => {
    res.json(aboutMeJSON); 
});

module.exports = router;
