const { Schema, model } = require("mongoose");

const shopListSchema = new Schema({
  items: { type: String },
  name: { type: String },
});

const Shoplist = model("Shoplist", shopListSchema);

module.exports = Shoplist;
