var express = require("express");
var router = express.Router();
const passport = require("../modules/passportGithubLogin");

router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/register");
  }
);

/* GET home page. */
router.get("/*", function(req, res, next) {
  res.render("index", { title: "Exposure System" });
});

module.exports = router;
