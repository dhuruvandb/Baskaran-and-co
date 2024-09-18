const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  _id: { type: String },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
  images: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Products", productSchema);
