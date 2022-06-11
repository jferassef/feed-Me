const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const Food = require("../models/Food.model");

router.get("/userprofile", isLoggedIn, async (req, res, next) => {
  try {
    const { user } = req.session;
    const foods = await Food.find({
      user: user,
    });
    const filteredFood = foods.filter((food) => food.quantity != null);
    const total = filteredFood.length;
    const totalItems = foods.reduce((acc, food) => {
      return (acc += food.quantity);
    }, 0);
    const filteredMoney = foods.filter((food) => food.cost != null);
    const moneySpend = filteredMoney.reduce((acc, food) => {
      return (acc += food.cost);
    }, 0);
    res.render("user/userprofile", { total, totalItems, moneySpend });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
