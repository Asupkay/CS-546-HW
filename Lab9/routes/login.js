const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/", passport.authenticate('local', {failureRedirect: '/'}),function(req, res) {
    res.render("private/private");
});

module.exports = router;
