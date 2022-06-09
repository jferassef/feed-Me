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

router.post("/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Food.findByIdAndDelete(id);
    res.redirect("/shoplist/food-shoplist");
  } catch (error) {
    console.log(error);
  }
});

// router.get("/:id/edit", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const food = await Food.findById(id);
//     res.render("foods/food-edit", food);
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.post("/:id/edit", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { name, category, imageUrl, expireDate, quantity, note } = req.body;
//     const { user } = req.session;

//     await Food.findByIdAndUpdate(
//       id,
//       { name, category, imageUrl, expireDate, quantity, note, user },
//       { new: true }
//     );
//     res.redirect(`/food-shoplist`);
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
