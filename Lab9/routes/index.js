const loginRoutes = require("./login");
const privateRoutes = require("./private");

const constructorMethod = (app) => {
    app.get("/", (req, res) => {
        res.json({Nice: "you hit me"});
    });

    app.use("/login", loginRoutes);
    app.use("/private", privateRoutes);
    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
}

module.exports = constructorMethod;
