const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Food = require("../models/Food.model");
const User = require("../models/User.model");
const Quantity = require("../models/Quantity.model");

router.get("/", async (req, res, next) => {
  try {
    const foods = await Food.find();
    res.render("foods/foods", {
      foods,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/foods/food-create", (req, res, next) => {
  res.render("foods/food-create");
});
