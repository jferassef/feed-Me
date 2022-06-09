const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const Food = require("../models/Food.model");

router.get("/userprofile", isLoggedIn, async (req, res, next) => {
  const foods = await Food.find();
  const moneySpend = foods.filter(
    (food) => food.cost //&& food.user == user
  );
  res.render("user/userprofile", { moneySpend });
});

module.exports = router;
