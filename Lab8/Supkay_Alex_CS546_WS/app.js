/**----------------------------------------------------*
/ Name: app.js                                         |
/ Project: Lab8                                        |
/ Description: Palindrome Checker                      |
/ Author: Alex Supkay                                  |
/ Pledge: I pledge my honor that I have abided by the  |
/ Stevens Honor System                                 |
/-----------------------------------------------------*/

const express = require("express");
const app = express();
const static = express.static(__dirname +'/public');

const configRoutes = require("./routes");
const exphbs = require('express-handlebars');

app.use("/public", static);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
