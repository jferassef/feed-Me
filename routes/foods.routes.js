const router = require("express").Router();
const Food = require("../models/Food.model");
const User = require("../models/User.model");
const axios = require("axios");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const { user } = req.session;
    const foods = await Food.find({
      user: user,
    });
    const meats = foods.filter((food) => food.category === "Meat");
    const vegetables = foods.filter((food) => food.category === "Vegetable");
    const fruits = foods.filter((food) => food.category === "Fruit");
    const sweets = foods.filter((food) => food.category === "Sweets");

    const others = foods.filter((food) => food.category === "Other");

    const drinks = foods.filter((food) => food.category === "Drinks");
    res.render("foods/foods", {
      meats,
      vegetables,
      fruits,
      others,
      sweets,
      drinks,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/food-create", isLoggedIn, (req, res, next) => {
  res.render("foods/food-create");
});

router.get("/recipes", isLoggedIn, async (req, res, next) => {
  const { user } = req.session;
  const foods = await Food.find({
    user: user,
  });
  let params = "";
  for (var i = 0; i < foods.length; ++i) params += foods[i].name + ",+";
  params = params.slice(0, -2);

  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${params}&number=2`;

  const { data } = await axios.get(url, {
    headers: {
      "x-api-key": "a0323a6f5a0b4d7fa73079f67e5abd8d",
    },
  });

  res.render("foods/food-recipes", { data: data });
});

router.post("/food-create", isLoggedIn, async (req, res, next) => {
  try {
    const { name, category, imageUrl, expireDate, quantity, note, cost } =
      req.body;
    const { user } = req.session;
    await Food.create({
      name,
      category,
      imageUrl,
      expireDate,
      quantity,
      note,
      cost,
      user,
    });

    res.redirect("/foods");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/edit", isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);
    res.render("foods/food-edit", food);
  } catch (error) {
    console.log(error);
  }
});

router.post("/:id/edit", isLoggedIn, async (req, res, next) => {
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

router.post("/:id/delete", isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;
    await Food.findByIdAndDelete(id);
    res.redirect("/foods");
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);
    res.render("foods/food-details", food);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
