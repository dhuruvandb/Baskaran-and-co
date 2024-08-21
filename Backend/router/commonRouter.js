const express = require("express");
const {
  getAllProducts,
  getOneProduct,
  getCategory,
} = require("../controllers/common/productController");
const {
  GET_ALL_PRODUCTS_PATH,
  GET_ONE_PRODUCT_PATH,
  GET_ALL_CATOGORIES,
  HOME,
} = require("../constants/paths");
const productCategories = require("../models/productCategories");

const router = express.Router();

router.get(GET_ALL_PRODUCTS_PATH, getAllProducts);
router.get(GET_ONE_PRODUCT_PATH, getOneProduct);
router.get([HOME, GET_ALL_CATOGORIES], getCategory);
// router.delete("/d", async (req, res) => {
//   const result = await productCategories.deleteMany();
//   res.json({ result });
// });

module.exports = router;
