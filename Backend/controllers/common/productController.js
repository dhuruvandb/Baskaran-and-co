const { viewCategory, getAllProducts } = require("../../helpers/helper");
const mongoose = require("mongoose");
const productModel = require("../../models/productModel");

exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { userId } = req.query;
    const result = await getAllProducts(userId, { category });
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.query;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    const products = await getAllProducts(userId, { _id: id });
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ result: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getCategory = async (req, res) => {
  const result = await viewCategory();
  res.status(200).json({ result });
};

exports.searchProducts = async (req, res) => {
  try {
    const { searchText } = req.params;
    const results = await productModel.find();
    const result = results
      .filter((d) => d.name.toLowerCase().includes(searchText.toLowerCase()))
      .map((d) => d);

    return res.json({ result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
