const { findOne } = require("../../helpers/mongooseHelpers");
const productModel = require("../../models/productModel");
const wishList = require("../../models/wishList");

exports.addWishList = async (req, res) => {
  const result = await wishList.create(req.body);
  res.status(200).json({ result });
};

exports.getWishList = async (req, res) => {
  const { userId } = req.params;
  const result = await wishList.findOne({ userId }).populate("Items");

  res.status(200).json({ result: result.Items });
};

exports.deleteWishList = async (req, res) => {
  const { userId } = req.params;
  const { productId } = req.body;
  await wishList.updateOne({ userId }, { $pull: { Items: productId } });
  const result = findOne(wishList, { userId });
  res.status(203).json({ result });
};
