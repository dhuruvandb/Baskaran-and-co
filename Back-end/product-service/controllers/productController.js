const Product = require("../models/productModel");

exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      message: "Product added successfully",
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding product",
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating product",
      error: error.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const { page, limit, category } = req.query;

    const products = await Product.aggregate([
      { $match: { category } },
      { $skip: parseInt((page - 1) * limit) },
      { $limit: parseInt(limit) },
    ]);

    res.status(200).json({ products, totalPages: products.length });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving products",
      error: error.message,
    });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const { page, limit } = req.query;

    const category = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          product: { $first: "$$ROOT" },
        },
      },
      { $skip: parseInt((page - 1) * limit) },
      { $limit: parseInt(limit) },
    ]);
    const totalcategory = await Product.aggregate([
      {
        $group: {
          _id: "$category",
        },
      },
    ]);
    res.status(200).json({ category, totalcategory: totalcategory.length });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving products",
      error: error.message,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.find({ _id: id });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product retrieved successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving product",
      error: error.message,
    });
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product removed successfully",
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error removing product",
      error: error.message,
    });
  }
};

exports.searchProducts = async (req, res) => {
  try {
    const { searchText } = req.params;
    console.log(searchText);

    const results = await Product.find({ $text: { $search: searchText } });
    // const productResults = results.filter((_) =>
    //   _.name.toLowerCase().includes(searchText.toLowerCase())
    // );
    console.log({ results });

    return res.json({ results });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
