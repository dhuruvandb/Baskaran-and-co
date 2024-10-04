const { Schema, model } = require("mongoose");
const itemSchema = new Schema({
  productId: {
    type: String,
    required: [true, "Product ID is required"],
    ref: "Products",
  },
  count: {
    type: Number,
    required: [true, "Quantity of product is required"],
  },
});

const cartSchema = new Schema({
  userId: {
    type: String,
    required: [true, "User ID is required"],
  },
  Items: [itemSchema], // Define Items as an array of itemSchema
});

module.exports = model("Cart", cartSchema);
