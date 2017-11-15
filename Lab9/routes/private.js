const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    //Protect this route with authentication middleware/passport
    passport.authenticate('local');
});

module.exports = router;
