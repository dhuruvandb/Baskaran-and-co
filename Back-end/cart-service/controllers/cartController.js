const Cart = require("../models/cartModel");

class CartController {
  static async handleCartUpdate(req, res) {
    try {
      const { userId, items } = req.body; // Destructure the request body
      const { title, price, image, quantity, _id } = items; // Extract item properties
      // Find existing cart for the user
      const existingCart = await Cart.findOne({ userId });
      if (existingCart) {
        // Find if the item already exists in the cart
        const existingItem = existingCart.items.find(
          (item) => String(item._id) === _id
        );
        if (existingItem) {
          // If quantity is 0, remove the item
          if (existingItem.quantity <= 0) {
            await Cart.updateOne(
              { userId },
              { $pull: { items: { title, price } } }
            );
          } else {
            await Cart.updateOne(
              { userId, "items._id": _id },
              { "items.$.quantity": quantity }
            );
          }
        } else {
          // If item doesn't exist, add it to the cart
          await Cart.updateOne(
            { userId },
            { $push: { items: { title, price, image, quantity } } }
          );
        }

        // Fetch the updated cart
        const updatedCart = await Cart.findOne({ userId });

        // If the cart is empty, delete it
        if (updatedCart && updatedCart.items.length === 0) {
          await Cart.deleteOne({ userId });
          return res
            .status(204)
            .json({ message: "Cart deleted, no items left" });
        }

        return res.status(200).json({ result: updatedCart });
      } else {
        // If no cart exists for the user, create a new one
        const newCart = await Cart.create({
          userId,
          items: [{ title, price, image, quantity }],
        });

        return res.status(201).json({ result: newCart });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async deleteItemFromCart(req, res) {
    try {
      console.log("req", req.params);
      const { userId, ItemId } = req.params;
      // Perform the update operation on the Cart model
      const result = await Cart.updateOne(
        { userId: { $eq: userId } },
        { $pull: { items: { _id: ItemId } } }
      );

      // Check if the result is modified or not
      // if (result.modifiedCount === 0) {
      //   return res
      //     .status(404)
      //     .json({ message: "Item not found or not deleted" });
      // }
      // Send success response
      return res.status(200).json({ message: "Product deleted", result });
    } catch (error) {
      // Catch any errors and send a response
      console.error(error);
      return res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  }

  static async getCartItems(req, res) {
    const { userId } = req.params;
    const userCart = await Cart.findOne({ userId });
    console.log({ userCart });

    if (userCart && userCart.items) {
      return res.json({ userCart });
    } else {
      return res.json({ result: [] });
    }
  }
}

module.exports = CartController;
