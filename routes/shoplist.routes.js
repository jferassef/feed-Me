const router = require("express").Router();
const Food = require("../models/Food.model");
const User = require("../models/User.model");

router.get("/food-shoplist", async (req, res, next) => {
  try {
    const { user } = req.session;
    const foods = await Food.find({
      user: user,
    });
    const shopListSugestion = foods.filter(
      (food) => food.quantity < 2 && food.quantity != null
    );
    const shopList = foods.filter((food) => food.quantity === null);
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
      user,
    });

    res.redirect("/shoplist/food-shoplist");
  } catch (error) {
    next(error);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Food.findByIdAndDelete(id);
    res.redirect("/shoplist/food-shoplist");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
