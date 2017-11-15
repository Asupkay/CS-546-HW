const configRoutes = require("./routes");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

app.use(bodyParser.json());
configRoutes(app);

app.listen(3000, () => {
    console.log("Server is now running on http://localhost:3000");
});
