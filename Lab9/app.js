const configRoutes = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const data = require("./data");
const bcrypt = require('bcrypt-nodejs');

const express = require("express");
const app = express();

const static = express.static(__dirname + '/public');
const exphbs = require('express-handlebars');

app.use("/public", static);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    
    function(username, password, done) {
        let user;
        try {
            user = data.findUserByUsername(username);
        } catch (e) {
            return done(null, false, {message: 'Incorrect username.'});
        }
        
        bcrypt.compare(password, user.hashedPassword, (err, res) => {
            if(res === true) {
                return done(null, user);
            } else {
                return done(null, false, {message: 'Incorrect password.'});
            }
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    let user = data.findUserById(id);
    done(null, user);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
configRoutes(app);

app.listen(3000, () => {
    console.log("Server is now running on http://localhost:3000");
});
