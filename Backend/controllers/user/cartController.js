const { getAllProducts } = require("../../helpers/helper");
const Cart = require("../../models/cart");
exports.handleCartUpdate = async (req, res) => {
  try {
    const { userId, Items } = req.body;
    const { productId, count } = Items;

    const existingCart = await Cart.findOne({ userId });

    if (existingCart) {
      const existingItem = existingCart.Items.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.count += count;

        if (existingItem.count === 0) {
          await Cart.updateOne({ userId }, { $pull: { Items: { productId } } });
        } else {
          await Cart.updateOne(
            { userId, "Items.productId": productId },
            { $inc: { "Items.$.count": count } }
          );
        }

        const updatedCart = await Cart.findOne({ userId });
        if (updatedCart.Items.length === 0) {
          await Cart.deleteOne({ userId });
          const result = await getAllProducts(
            userId,
            undefined,
            undefined,
            true
          );
          return res.status(204).json({ result });
        } else {
          const result = await getAllProducts(
            userId,
            undefined,
            undefined,
            true
          );
          return res.status(204).json({ result });
        }
      } else {
        if (count < 1) {
          res.status(400).send({ error: "Count must be greater than 0" });
        } else {
          await Cart.updateOne(
            { userId },
            { $push: { Items: { productId, count } } }
          );
          const result = await getAllProducts(
            userId,
            undefined,
            undefined,
            true
          );
          return res.status(204).json({ result });
        }
      }
    } else {
      if (count < 1) {
        res.status(400).send({ error: "Count must be greater than 0" });
      } else {
        await Cart.create({ userId, Items: [{ productId, count }] });
        const result = await getAllProducts(userId, undefined, undefined, true);
        return res.status(204).json({ result });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.deleteItemFromCart = async (req, res) => {};

exports.getCartItems = async (req, res) => {
  const { userId } = req.params;
  console.log({userId},"aaaaaaaaaaaaa")
  const userCart = await Cart.findOne(
    { userId },
    { Items: 1, _id: 0 }
  ).populate([{ path: "Items.productId" }]);
  if (userCart && userCart.Items) {
    const result =
      userCart.Items.map((item) => ({
        ...item.productId.toObject(),
        cartValue: item.count,
      })) || [];

    res.json({ result });
    return result;
  } else {
    res.json({ result: [] });
  }
};
