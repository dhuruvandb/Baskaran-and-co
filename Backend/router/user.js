const express = require("express");
const {
  updateCart,
  deleteCart,
  getCart,
  addToCart,
  handleCartUpdate,
  deleteItemFromCart,
  getCartItems,
} = require("../controllers/user/cartController");
const {
  VIEW_CART_PATH,
  ADD_CART_PATH,
  UPDATE_CART_PATH,
  DELETE_CART_PATH,
  GET_ALL_USER_PRODUCTS_PATH,
  GET_ONE_USER_PRODUCT_PATH,
  SIGNUP_PATH,
  LOGIN_PATH,
  FORGET_PASSWORD_PATH,
  SEND_OTP,
} = require("../constants/paths");
const {
  getAllUserProducts,
  getOneUserProduct,
} = require("../controllers/user/productController");
const { Signup } = require("../controllers/auth/signupController");
const {
  ForgetPassword,
} = require("../controllers/auth/forgetPasswordController");

const {
  otpMiddleware,
  resetSession,
} = require("../middlewares/auth-middleware");
const validateLoginEmail = require("../middlewares/validation-middleware");

const { verifyToken, createToken, addCart } = require("../helpers/helper");
const { LoginWithPassword } = require("../controllers/auth/loginController");
const { SendOTP } = require("../controllers/auth/OTPcontroller");
const router = express.Router();

router.get(GET_ALL_USER_PRODUCTS_PATH, getAllUserProducts);
router.get(GET_ONE_USER_PRODUCT_PATH, getOneUserProduct);
router.get(VIEW_CART_PATH, getCartItems);
router.post([ADD_CART_PATH, UPDATE_CART_PATH], handleCartUpdate);
router.delete(DELETE_CART_PATH, deleteItemFromCart);
router.post(SIGNUP_PATH, SendOTP, Signup);
router.post(LOGIN_PATH, validateLoginEmail, LoginWithPassword);
router.put(FORGET_PASSWORD_PATH, ForgetPassword);
router.post(SEND_OTP, SendOTP);
// router.delete("/delete", (req, res) => {
//   deleteAccount(req.body.email)
//     .then((result) => {
//       res.json({ result });
//     })
//     .catch((e) => res.json({ e }));
// });

router.post("/c", createToken);
router.post("/v", verifyToken);
module.exports = router;
