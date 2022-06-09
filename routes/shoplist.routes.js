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

// router.get("/food-shoplist", async (req, res, next) => {
//   try {
//     const { user } = req.session;
//     const shopListItems = await Shoplist.find();
//     if (shopListItems.length === 0) {
//       Shoplist.create({
//         name: "test",
//         items: [],
//       });
//     }
//     const shopList = shopListItems[0];
//     const foods = await Food.find();
//     const shopListSugestion = foods.filter(
//       (food) => food.quantity < 2 /* && food.user == user */
//     );
//     res.render("shoplist/food-shoplist", { shopListSugestion, shopList });
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/food-shoplist", async (req, res, next) => {
//   try {
//     const { _id, name } = req.body;
//     const { user } = req.session;
//     const shopList = await Shoplist.find(_id);
//     if (!shopList.items) {
//       shopList.items = [];
//     }
//     const updatedItems = shopList.items;
//     updatedItems.push(name);
//     shopList.findByIdAndUpdate(_id, { items: updatedItems });

//     res.redirect("/shoplist/food-shoplist");
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
