const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/", passport.authenticate('local', {failureRedirect: '/', failureFlash: true}),function(req, res) {
    res.render("private/private", {user: req.user});
});

module.exports = router;
