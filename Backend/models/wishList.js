const { Schema, model } = require("mongoose");

const wishlist = new Schema({
  userId: {
    type: String,
    required: true,
  },
  Items: {
    type: Array,
    required: true,
    ref: "Products",
  },
});

module.exports = model("wishlist", wishlist);
