const configRoutes = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require('connect-flash');
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
    
    async function(username, password, done) {
        let user;
        try {
            user = await data.users.getUserByUsername(username);
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
    done(null, user._id);
});

passport.deserializeUser(async function(id, done) {
    let user = await data.users.getUserById(id);
    if(!user) { return done("error"); }
    done(null, user);
});

app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
configRoutes(app);

app.listen(3000, () => {
    console.log("Server is now running on http://localhost:3000");
});
