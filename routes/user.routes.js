const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const Food = require("../models/Food.model");

router.get("/userprofile", isLoggedIn, async (req, res, next) => {
  // const foods = await Food.find();
  // const moneySpend = foods.filter(
  //   (food) => food.cost //&& food.user == user
  // );
  try {
    const { user } = req.session;
    const foods = await Food.find({
      user: user,
    });
    const total = foods.length;
    const totalItems = foods.reduce((acc, food) => {
      return (acc += food.quantity);
    }, 0);
    res.render("user/userprofile", { total, totalItems });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
