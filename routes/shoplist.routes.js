const router = require("express").Router();
const Food = require("../models/Food.model");
const User = require("../models/User.model");
const Shoplist = require("../models/Shoplist.model");

router.get("/food-shoplist", async (req, res, next) => {
  try {
    const { user } = req.session;
    const foods = await Food.find();
    const shopListSugestion = foods.filter(
      (food) =>
        food.quantity < 2 && food.quantity != null /* && food.user == user */
    );
    const shopList = foods.filter(
      (food) => food.quantity === null /* && food.user == user */
    );
    res.render("shoplist/food-shoplist", {
      shopList,
      shopListSugestion,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/food-shoplist", async (req, res, next) => {
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
    });

    res.redirect("/shoplist/food-shoplist");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
