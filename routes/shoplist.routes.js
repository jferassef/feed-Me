const router = require("express").Router();
const Food = require("../models/Food.model");
const User = require("../models/User.model");
const Shoplist = require("../models/Shoplist.model");

router.get("/food-shoplist", async (req, res, next) => {
  try {
    const { user } = req.session;
    const foods = await Food.find();
    const shopList = foods.filter(
      (food) => food.quantity < 2 /* && food.user == user */
    );
    res.render("shoplist/food-shoplist", { shopList });
  } catch (error) {
    next(error);
  }
});

/* router.post("/food-shoplist", async (req, res, next) => {
  try {
    const { item } = req.body;
    const { user } = req.session;
    await Food.create({
      item,
    });

    res.redirect("/foods");
  } catch (error) {
    next(error);
  }
}); */

module.exports = router;
