const { Schema, model } = require("mongoose");

const cartItemsSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Products",
  },
  count: {
    type: Number,
    require: true,
    default: 1,
  },
});

const cart = new Schema({
  userId: {
    type: String,
    ref: "user",
    require: true,
  },
  items: [cartItemsSchema],
});

module.exports = model("cart", cart);
