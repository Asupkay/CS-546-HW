const express = require('express');
const router = express.Router();

const educationMeJSON = [
    {
        "schoolName": "University of South Florida",
        "degree": "Bachelor's of Engineering in Computer Science",
        "favoriteClass": "Developing Mobile Apps",
        "favoriteMemory": "Not taking more than 15 credits."
    },
    {
        "schoolName": "Stevens Institute of Technology",
        "degree": "Bachelor's of Science in Computer Science",
        "favoriteClass": "Concurrent Programming",
        "favoriteMemory": "Going into the city to listen to a wake."
    }
];

router.get("/", (req, res) => {
    res.json(educationMeJSON); 
});

module.exports = router;
