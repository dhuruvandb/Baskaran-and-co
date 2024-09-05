const { Schema, model } = require("mongoose");

const cart = new Schema({
  userId: {
    type: String,
    ref: "user",
    require: true,
  },
  items: {
    type: Map,
    of: Number,
    require: true,
  },
});

module.exports = model("cart", cart);
