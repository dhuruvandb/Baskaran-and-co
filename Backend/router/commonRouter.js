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

router.get(
  GET_ALL_PRODUCTS_PATH,
  (req, res, next) => {
    console.log({}, "all products called ................");
    next();
  },
  fetchAllProducts
);
router.get(
  GET_ONE_PRODUCT_PATH,
  (req, res, next) => {
    console.log({}, "one product called ................");
    next();
  },
  getOneProduct
);
router.get(
  [HOME, GET_ALL_CATOGORIES],
  (req, res, next) => {
    console.log({}, "category called ................");
    next();
  },
  getCategory
);

router.delete("/d", async (req, res) => {
  const result = await product.deleteMany();
  res.json({ result });
});

module.exports = router;
