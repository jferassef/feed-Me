const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
  name: { type: String },
  category: {
    type: String,
    enum: ["Meat", "Vegetable", "Fruit", "Sweets", "Drinks", "Other"],
  },
  imageUrl: {
    type: String,
  },
  expireDate: { type: Date },
  quantity: { type: Number },
  note: { type: String },
  cost: { type: Number },
  user: { type: String },
});

const Food = model("Food", foodSchema);

module.exports = Food;
