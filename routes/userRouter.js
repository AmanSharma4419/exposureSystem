const express = require("express");
const router = express.Router();
const users = require("../controllers/usersController");
const auth = require("../utils/auth");
const passport = require("../modules/passportGithubLogin");
router.post("/register", users.registerUser);

router.post("/login", users.loginUser);

router.get("/:userId", users.findUser);

router.get("/auth/github", passport.authenticate("github"));


// User Status Route
router.get("/status/all", auth.verifyToken, users.userStatus);

module.exports = router;
