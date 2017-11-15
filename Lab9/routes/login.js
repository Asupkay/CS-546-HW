const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    passport.authenticate('local', {successRedirect: '/private',
                                    failureRedirect: '/',
                                    failureFlash: true});
});

module.exports = router;
