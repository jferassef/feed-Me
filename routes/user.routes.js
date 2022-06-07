const router = require("express").Router();
const User = require("../models/User.model");

router.get("/userprofile", (req, res, next) => {
  res.render("user/userprofile");
});

module.exports = router;
