const { Schema, model } = require("mongoose");

const shopListSchema = new Schema({
  items: { type: Array },
  name: { type: String },
});

const Shoplist = model("Shoplist", shopListSchema);

module.exports = Shoplist;
