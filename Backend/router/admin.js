const express = require("express");

const router = express.Router();

const {
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/admin/productController");
const {
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/admin/categoryController");
const {
  ADMIN_ADD_PRODUCT_PATH,
  ADMIN_UPDATE_PRODUCT_PATH,
  ADMIN_DELETE_PRODUCT_PATH,
  ADMIN_ADD_CATEGORY_PATH,
  ADMIN_UPDATE_CATEGORY_PATH,
  ADMIN_DELETE_CATEGORY_PATH,
} = require("../constants/paths");

router.post(ADMIN_ADD_PRODUCT_PATH, addProduct);
router.put(ADMIN_UPDATE_PRODUCT_PATH, updateProduct);
router.delete(ADMIN_DELETE_PRODUCT_PATH, deleteProduct);

router.post(ADMIN_ADD_CATEGORY_PATH, addCategory);
router.put(ADMIN_UPDATE_CATEGORY_PATH, updateCategory);
router.delete(ADMIN_DELETE_CATEGORY_PATH, deleteCategory);

module.exports = router;
