/**----------------------------------------------------*
/ Name: app.js                                         |
/ Project: Lab4                                        |
/ Description: Simple server that will represent the   |
/ same data that you created in lab 5 by sending JSON  |
/ down through API calls                               |
/ Author: Alex Supkay                                  |
/ Pledge: I pledge my honor that I have abided by the  |
/ Stevens Honor System                                 |
/-----------------------------------------------------*/

const express = require("express");

//Create an express server
let app = express();
let routesConfig = require("./routes");

//Configure the routes for app
routesConfig(app);

//Set the server to listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
