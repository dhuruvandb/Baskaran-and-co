const Cart = require("../../models/cart");
exports.handleCartUpdate = async (req, res) => {
  try {
    const { userId, Items } = req.body;
    const { productId, count } = Items;

    // Check if userId already exists in DB
    const existingCart = await Cart.findOne({ userId });

    if (existingCart) {
      // Check if product already exists in cart
      const existingItem = existingCart.Items.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        // Update count
        existingItem.count += count;

        // Remove item if count reaches 0
        if (existingItem.count === 0) {
          await Cart.updateOne({ userId }, { $pull: { Items: { productId } } });
        } else {
          await Cart.updateOne(
            { userId, "Items.productId": productId },
            { $inc: { "Items.$.count": count } }
          );
        }

        // Remove whole document if Items array is empty
        const updatedCart = await Cart.findOne({ userId });
        if (updatedCart.Items.length === 0) {
          await Cart.deleteOne({ userId });
          return res.send({ message: "Cart removed successfully" });
        } else {
          return res.send({ message: "Product updated successfully" });
        }
      } else {
        // Check if count is valid
        if (count < 1) {
          return res
            .status(400)
            .send({ error: "Count must be greater than 0" });
        } else {
          // Add new item to cart
          await Cart.updateOne(
            { userId },
            { $push: { Items: { productId, count } } }
          );
          return res.send({ message: "Product Added successfully" });
        }
      }
    } else {
      // Create new cart
      // Check if count is valid
      if (count < 1) {
        return res.status(400).send({ error: "Count must be greater than 0" });
      } else {
        await Cart.create({ userId, Items: [{ productId, count }] });
        return res.send({ message: "Cart created successfully" });
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
  const userCart = await Cart.findOne(
    { userId },
    { Items: 1, _id: 0 }
  ).populate([{ path: "Items.productId" }]);
  if (userCart && userCart.Items) {
    const result =
      userCart.Items.map((item) => ({
        ...item.productId.toObject(), // or toJSON()
        cartValue: item.count,
      })) || [];

    res.json({ result });
  } else {
    res.json({ result: [] });
  }
};
