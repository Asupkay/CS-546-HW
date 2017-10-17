const express = require('express');
const router = express.Router();

//Create a story JSON object
const storyJSON = {
    "storyTitle": "The Time I Bricked a Brand New Laptop",
    "story": "I was looking to buy a new laptop I wanted something that would be able to run linux well because at the time I had never used linux and wanted to learn how to get used to it by running the operating system alone. I went to Best Buy and found a laptop I liked with an I7 and a solid state harddrive. I talked to the salesman about wanting to put linux on it and he tried to convince me to buy a gaming laptop but I declined. I paid for the laptop and walked home happy with my brand new computer in hand. When I got home I got the distro apricity on an SD card and loaded it onto the computer and messed around a little to get it to boot from the SD card. I went through the process of wiping the harddrive through the prompts and giving apricity control of the space. Once it came time to restart in the prompt I did. The problem is the computer never came back on, the screen remained black and wouldn't turn on. I tried removing the CMOS battery to wipe the bios but that did not work. I ended up going to return the computer and got a new one of the same model. Since it didn't turn on they weren't able to see that I had loaded linux onto the computer."
};

//If they go to this route display the story JSON object
router.get("/", (req, res) => {
    res.json(storyJSON); 
});

//Export the router
module.exports = router;
