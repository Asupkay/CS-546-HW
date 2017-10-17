//Create get the different routes
const aboutRoutes = require("./about");
const educationRoutes = require("./education");
const storyRoutes = require("./story");

//constructor method for connecting the different routes to the server
const constructorMethod = (app) => {
    app.use("/about", aboutRoutes);
    app.use("/education", educationRoutes);
    app.use("/story", storyRoutes);

    //If it is anything else give a 404 error
    app.use("*", (req, res) => {
        res.status(404).json({error: "Not Found"});
    });
};

//Export the constructor method
module.exports = constructorMethod;
