const path = require("path")

const loginRoutes = require("./login");
const privateRoutes = require("./private");

const constructorMethod = (app) => {
    app.use("/login", loginRoutes);
    app.use("/private", privateRoutes);

    app.get("/", (req, res) => {
        res.render("loginpage/login");
    });

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
}

module.exports = constructorMethod;
