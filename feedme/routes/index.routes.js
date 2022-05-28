const router = require("express").Router();
const User = require("../models/User.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/", async(req, res, next)=>{
  try {
    const { name} = req.body;
    await User.create({
      name
    });
    res.redirect("auth/signup");
  } catch (error) {
    next(error);
  }
});




router.use("/foods", require("./foods.routes"));

module.exports = router;
