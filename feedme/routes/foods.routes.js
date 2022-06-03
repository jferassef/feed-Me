const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Food = require("../models/Food.model");
const User = require("../models/User.model");

router.get("/food-shoplist", async (req, res, next) => {
  try {
    const foods = await Food.find();
    const shopList = foods.filter((food) => food.quantity < 2);
    res.render("foods/food-shoplist", { shopList });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const foods = await Food.find();
    const total = foods.reduce((acc, food) => {
      return (acc += food.quantity);
    }, 0);
    res.render("foods/foods", {
      foods,
      total,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/food-create", (req, res, next) => {
  res.render("foods/food-create");
});

router.post("/food-create", async (req, res, next) => {
  try {
    const { name, category, imageUrl, expireDate, quantity, note } = req.body;
    await Food.create({
      name,
      category,
      imageUrl,
      expireDate,
      quantity,
      note,
    });

    res.redirect("/foods");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);
    res.render("foods/food-edit", food);
  } catch (error) {
    console.log(error);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, category, imageUrl, expireDate, quantity, note } = req.body;
    await Food.findByIdAndUpdate(
      id,
      { name, category, imageUrl, expireDate, quantity, note },
      { new: true }
    );
    res.redirect(`/foods`);
  } catch (error) {
    console.log(error);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Food.findByIdAndDelete(id);
    res.redirect("/foods");
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);
    res.render("foods/food-details", food);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
