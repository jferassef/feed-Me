const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// router.use("/foods", require("./food.routes"));

module.exports = router;
