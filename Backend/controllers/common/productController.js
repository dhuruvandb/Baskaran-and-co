const { viewCategory, getProducts } = require("../../helpers/helper");
const mongoose = require("mongoose");
exports.fetchAllProducts = async (req, res) => {
  try {
    const { category } = req.params;
    const result = await getProducts({ category });
    
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    // Extract the product ID from the request parameters
    const { id } = req.params;

    // Ensure the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    const products = await getProducts({ _id: id });
    // Check if any products were found
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Return the product in the response
    res.status(200).json({ result: products });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getCategory = async (req, res) => {
  const result = await viewCategory();
  res.status(200).json({ result });
};
