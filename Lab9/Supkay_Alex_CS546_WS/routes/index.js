const path = require("path")

const loginRoutes = require("./login");
const privateRoutes = require("./private");

const constructorMethod = (app) => {
    app.use("/login", loginRoutes);
    app.use("/private", privateRoutes);

    app.get("/", (req, res, info) => {
        if(req.user) {
            res.redirect("/private");
        } else {
            let loginError = req.flash();
            if(loginError.error) {
                loginError = loginError.error;
            } else {
                loginError = "";
            }
            res.render("loginpage/login", {error: loginError});
        }
    });

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
}

module.exports = constructorMethod;
