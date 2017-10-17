const express = require('express');
const router = express.Router();

//Create the about me JSON object
const aboutMeJSON = {
    "name": "Alex Supkay",
    "biography": "I am a Computer Science major, with a entrepreneurship minor, that is going for a Master's of Software Engineering. I have most of my experience in software development using Java and C# but I am working to learn a bit more about python and web development. I have created small games and apps in Unity. Recently, I have been doing research by coding android apps utilizing Firebase databases and authentication with Facebook. Most people wouldn't know that I collect retro video games ranging from the Nintendo Entertainment System to the GameCube.",
    "favoriteShows": ["Bojack Horseman", "Rick and Morty", "The Office", "The 100"],
    "hobbies": ["Working out", "Collecting retro videogames", "Drinking water"]
};

//If they go to this route display the about me JSON object
router.get("/", (req, res) => {
    res.json(aboutMeJSON); 
});

//Export the router
module.exports = router;
