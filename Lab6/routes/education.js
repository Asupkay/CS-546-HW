const express = require('express');
const router = express.Router();

//Create an education JSON object
const educationJSON = [
    {
        "schoolName": "University of South Florida",
        "degree": "Bachelor's of Engineering in Computer Science",
        "favoriteClass": "Developing Mobile Apps",
        "favoriteMemory": "I once got attacked by a velociraptor while I was walking home from class and it tore both of my legs off but my mom was there so it was okay."
    },
    {
        "schoolName": "Stevens Institute of Technology",
        "degree": "Bachelor's of Science in Computer Science",
        "favoriteClass": "Concurrent Programming",
        "favoriteMemory": "One of my professors had an NES and I tried buying it from him but he wouldn't sell it to me"
    }
];

//If they go to this route display the education JSON object
router.get("/", (req, res) => {
    res.json(educationJSON); 
});

//Export the router
module.exports = router;
