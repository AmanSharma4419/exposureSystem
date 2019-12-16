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
    function(accessToken, refreshToken, profile, cb) {
      const username = profile.username;
      const useremail = profile.emails[0].value;
      User.find({ email: useremail }, (err, user) => {
      });
    }
  )
);

module.exports = passport;
