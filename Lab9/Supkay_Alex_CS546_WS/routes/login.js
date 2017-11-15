const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/", passport.authenticate('local', {failureRedirect: '/', failureFlash: true}),function(req, res) {
    res.redirect("/private");
});

module.exports = router;
