const express = require("express");
const {
  getOneProduct,
  getCategory,
  fetchAllProducts,
} = require("../controllers/common/productController");
const {
  GET_ALL_PRODUCTS_PATH,
  GET_ONE_PRODUCT_PATH,
  GET_ALL_CATOGORIES,
  HOME,
} = require("../constants/paths");
const productCategories = require("../models/productCategories");
const product = require("../models/productModel");
const cart = require("../models/cart");
const router = express.Router();

router.get(GET_ALL_PRODUCTS_PATH, fetchAllProducts);
router.get(GET_ONE_PRODUCT_PATH, getOneProduct);
router.get([HOME, GET_ALL_CATOGORIES], getCategory);
router.delete("/d", async (req, res) => {
  const result = await cart.deleteMany();
  res.json({ result });
});

module.exports = router;
