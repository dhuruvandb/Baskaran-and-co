const {
  addCart,
  updateCart,
  deleteCart,
  viewCart,
} = require("../../helpers/helper");
const { find } = require("../../helpers/mongooseHelpers");
const cart = require("../../models/cart");

exports.addCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const isUserPresent = await find(cart, { userId });
    if (isUserPresent.length > 0) {
      const result = await updateCart(
        { userId },
        { $push: { items: req.body.items } }
      );
      res.status(200).json({ result });
    } else {
      const result = await addCart(req.body);
      res.status(200).json({ result });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const { count } = req.body;
    const productId = req.params.id;
    const result = await updateCart(
      { userId, "items.productId": productId },
      {
        $inc: { "items.$.count": count },
      }
    );
    await updateCart(
      { userId, "items.productId": productId },
      {
        $pull: { items: { productId, count: 0 } },
      }
    );
    res.status(200).json({ result });
  } catch (error) {
    new Error(error);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const productId = req.params.id;
    const result = await updateCart(
      { userId, "items.productId": productId },
      {
        $pull: { items: { productId } },
      }
    );
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};

exports.viewCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const result = await viewCart({ userId }, { items: 1 }, "items.productId");
    console.log(result);

    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};
