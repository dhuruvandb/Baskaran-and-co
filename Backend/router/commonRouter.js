const express = require("express");
const {
  getOneProduct,
  getCategory,
  getProductsByCategory,
  searchProducts,
} = require("../controllers/common/productController");
const {
  GET_ALL_PRODUCTS_PATH,
  GET_ONE_PRODUCT_PATH,
  GET_ALL_CATOGORIES,
  HOME,
  SEARCH_PATH,
} = require("../constants/paths");
const cart = require("../models/cart");
const router = express.Router();

router.get(GET_ALL_PRODUCTS_PATH, getProductsByCategory);
router.get(GET_ONE_PRODUCT_PATH, getOneProduct);
router.get([HOME, GET_ALL_CATOGORIES], getCategory);
router.get(SEARCH_PATH, searchProducts);
router.delete("/d", async (req, res) => {
  const result = await cart.deleteMany();
  res.json({ result });
});

module.exports = router;
