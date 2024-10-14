const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: "text", // Text index for name
  },
  category: {
    type: String,
    required: true,
    index: "text",
  },
  _id: { type: String },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    index: "text", // Text index for description
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  cartValue: {
    type: Number,
    default: 0,
  },
  images: {
    type: String,
    required: true,
  },
});

// Create the model
const Product = mongoose.model("Products", productSchema);

// Create the text index
productSchema.index({ name: "text", description: "text" });

module.exports = Product;
