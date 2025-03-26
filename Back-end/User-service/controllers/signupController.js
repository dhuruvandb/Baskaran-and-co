const {
  createUser,
  hashData,
  checkUserExists,
} = require("../../helpers/helper");
const {
  ACCOUNT_CREATED_MESSAGE,
  EMAIL_EXISTS_MESSAGE,
} = require("../../constants/constants");
const { LOGIN_PATH, SIGNUP_PATH } = require("../../constants/paths");
const User = require("../models/userModel");
exports.Signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log({ user });
    if (!user) {
      const hashpassword = await hashData(password, 10);
      const result = await User.insertMany({ email, password: hashpassword });
      console.log({ result });

      if (result) {
        res.status(201).json({
          message: ACCOUNT_CREATED_MESSAGE,
          path: LOGIN_PATH,
        });
      }
    } else {
      return res.json({
        message: EMAIL_EXISTS_MESSAGE,
        path: SIGNUP_PATH,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server Error" });
  }
};
