const { Schema, model } = require("mongoose");

const quantitySchema = new Schema({
  foodName: [{ type: Schema.Types.ObjectId, ref: "Food", default: [] }],
  quantity: { type: Number },
});

const Quantity = model("Quantity", quantitySchema);

module.exports = Quantity;