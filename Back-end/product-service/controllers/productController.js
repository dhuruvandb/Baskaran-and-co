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

    // Ensure `page` and `limit` are valid numbers, set defaults if missing
    const pageNumber = page && !isNaN(page) ? parseInt(page) : 1;
    const limitNumber = limit && !isNaN(limit) ? parseInt(limit) : 10;

    // Ensure category exists, otherwise return error
    if (!category) {
      return res.status(400).json({ message: "Category is required." });
    }

    const products = await Product.aggregate([
      { $match: { category } },
      { $skip: (pageNumber - 1) * limitNumber },
      { $limit: limitNumber },
    ]);

    // Count total number of products for the given category (for pagination)
    const totalProducts = await Product.aggregate([
      { $match: { category } },
      { $count: "total" },
    ]);

    // Get total pages by dividing the total number of products by the limit
    const totalPages =
      totalProducts.length > 0
        ? Math.ceil(totalProducts[0].total / limitNumber)
        : 0;

    res.status(200).json({ products, totalPages });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving all products",
      error: error.message,
    });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const { page, limit } = req.query;

    // Default values if page or limit are not provided
    const pageNumber = page && !isNaN(page) ? Number(page) : 1;
    const limitNumber = limit && !isNaN(limit) ? Number(limit) : 10;

    const category = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          product: { $first: "$$ROOT" },
        },
      },
      { $skip: (pageNumber - 1) * limitNumber },
      { $limit: limitNumber },
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
      message: "Error retrieving products category",
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
