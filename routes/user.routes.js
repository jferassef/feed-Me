const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/userprofile", isLoggedIn, (req, res, next) => {
  res.render("user/userprofile");
});

module.exports = router;
