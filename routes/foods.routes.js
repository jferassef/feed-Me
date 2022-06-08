const router = require("express").Router();
const Food = require("../models/Food.model");
const User = require("../models/User.model");
const Shoplist = require("../models/Shoplist.model");

router.get("/", async (req, res, next) => {
  try {
    const { user } = req.session;
    const foods = await Food.find({
      user: user,
    });

    const total = foods.length;
    const totalItems = foods.reduce((acc, food) => {
      return (acc += food.quantity);
    }, 0);

    res.render("foods/foods", {
      foods,
      total,
      totalItems,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/food-create", (req, res, next) => {
  res.render("foods/food-create");
});

router.get("/recipes", async (req, res, next) => {
  res.render("foods/recipes");
});

router.post("/food-create", async (req, res, next) => {
  try {
    const { name, category, imageUrl, expireDate, quantity, note } = req.body;
    const { user } = req.session;
    await Food.create({
      name,
      category,
      imageUrl,
      expireDate,
      quantity,
      note,
      user,
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
    const { user } = req.session;

    await Food.findByIdAndUpdate(
      id,
      { name, category, imageUrl, expireDate, quantity, note, user },
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