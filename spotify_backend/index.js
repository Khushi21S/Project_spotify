// Put the functionality of expressjs in express variable and used app to call the express function
const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const User = require("./models/User.js");
const authRoutes = require("./routes/auth.js");
const songRoutes = require("./routes/song.js");
const playlistRoutes = require("./routes/playlist.js");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());



//Connect mongodb to our node app

mongoose.connect(
"mongodb+srv://user:"+
      process.env.MONGO_PASSWORD +
     "@cluster0.5ibvk8x.mongodb.net/?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)

.then((x) => {
    console.log("Connected to Mongo!");
})
.catch((err) =>{
    console.log("Error while connecting to Mongo!")
}); 

// Passport-jwt setup

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload.identifier}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


// Creating API
app.get("/",(req, res) => {
    res.send("Hello World")
});

app.use("/auth", authRoutes);
app.use("/song",songRoutes);
app.use("/playlist", playlistRoutes);
//We want to tell to express that our server will run on localhost: 8000

app.listen(port, () =>{
    console.log("App is running on port  " + port);
});