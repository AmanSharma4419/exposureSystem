var GitHubStrategy = require("passport-github").Strategy;
const User = require("../models/userSchema");
var passport = require("passport");

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.Client_ID,
      clientSecret: process.env.Client_Secret,
      callbackURL: "http://localhost:3000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, cb, res) {
      const userName = profile.username;
      const userEmail = profile.emails[0].value;
      User.findOne({ email: userEmail }, (err, user) => {
        if (err) console.log(err);
        if (!user) {
          User.create({ userName: userName, email: userEmail }, (err, user) => {
            console.log(user, "user created by github!");
          });
        }
      });
    }
  )
);

module.exports = passport;
