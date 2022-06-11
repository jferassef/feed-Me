const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedOut = require("../middleware/isLoggedOut");

router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
