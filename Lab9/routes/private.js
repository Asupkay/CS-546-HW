const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", passport.authenticate('local', {failureRedirect: '/', failureFlash: "Not authorized"}),function(req, res) {
    res.render("private/private", {user: req.user});
});

module.exports = router;
