const { viewCategory, getProducts } = require("../../helpers/helper");
const productModel = require("../../models/productModel");
const mongoose = require("mongoose");

exports.fetchAllProducts = async (req, res) => {
  try {
    const { category } = req.params;
    const result = await getProducts({ category });
    console.log({ result }, "all products");

    res.status(200).json({ result });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.getOneProduct = async (req, res) => {
  // Use findById to fetch the document
  const result = await productModel.find({ name: "Angle Cock" });
  console.log(
    mongoose.isValidObjectId(req.params.id),
    { result },
    "pppppppppppppp"
  );
  res.status(200).json({ result });
};

exports.getCategory = async (req, res) => {
  const result = await viewCategory();
  console.log({}, "category called ................");

  res.status(200).json({ result });
};
