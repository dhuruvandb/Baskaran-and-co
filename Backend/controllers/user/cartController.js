const { addCart } = require("../../helpers/helper");
const Cart = require("../../models/cart");
const mongoose = require("mongoose");
const Products = require("../../models/productModel"); // Adjust the path as necessary
exports.handleCartUpdate = async (req, res) => {
  console.log(req.body);

  const userId = Object.keys(req.body)[0];
  const itemId = Object.keys(req.body[userId])[0];
  const itemQuantity = req.body[userId][itemId]; // Assuming you also send quantity to add or subtract
  const isDecrement = itemQuantity < 0; // Check if this is a decrement operation
  const quantityChange = Math.abs(itemQuantity); // Get the absolute value of the quantity change

  // Check if the user exists in the cart
  const userCart = await Cart.findOne({ [userId]: { $exists: true } });

  if (!userCart) {
    if (!isDecrement) {
      // User doesn't exist, create new cart entry
      const newCart = { [userId]: { [itemId]: quantityChange } };
      const result = await Cart.create(newCart);
      return res.status(201).json({ result });
    } else {
      return res
        .status(400)
        .json({ message: "Cannot decrement items in a non-existent cart." });
    }
  } else {
    const itemCount = userCart[userId][itemId] || 0; // Get current count, default to 0 if not present
    const itemKeys = Object.keys(userCart[userId]);

    if (!isDecrement) {
      // Item exists, update its count
      const updatedItem = await Cart.findOneAndUpdate(
        { [userId]: { $exists: true } },
        { $inc: { [`${userId}.${itemId}`]: quantityChange } },
        { new: true }
      );
      return res.json({ updatedItem });
    } else {
      // Decrement logic
      if (itemCount <= quantityChange) {
        // Remove item if quantity goes to 0 or below
        const updatedCart = await Cart.findOneAndUpdate(
          { [userId]: { $exists: true } },
          { $unset: { [`${userId}.${itemId}`]: "" } },
          { new: true }
        );

        // Check if the user has any items left
        if (itemKeys.length === 1) {
          // If this was the only item, delete the entire document
          await Cart.deleteOne({ [userId]: { $exists: true } });
          return res
            .status(204)
            .json({ message: "Cart is empty, user cart deleted." });
        }

        return res.json({ updatedCart });
      } else {
        // Update existing item count
        const updatedItem = await Cart.findOneAndUpdate(
          { [userId]: { $exists: true } },
          { $inc: { [`${userId}.${itemId}`]: -quantityChange } },
          { new: true }
        );
        return res.json({ updatedItem });
      }
    }
  }
};

exports.deleteItemFromCart = async (req, res) => {
  const userId = Object.keys(req.body)[0];
  const itemId = Object.keys(req.body[userId])[0];

  // Check if the user exists in the cart
  const userCart = await Cart.findOne({ [userId]: { $exists: true } });

  if (!userCart) {
    return res.status(404).json({ message: "Cart not found for the user." });
  }

  // Check the current items in the user's cart
  const itemKeys = Object.keys(userCart[userId]);

  // Remove the specified item from the cart
  const updatedCart = await Cart.findOneAndUpdate(
    { [userId]: { $exists: true } },
    { $unset: { [`${userId}.${itemId}`]: "" } },
    { new: true }
  );

  // If the item was the only one in the cart, delete the entire document
  if (itemKeys.length === 1) {
    await Cart.deleteOne({ [userId]: { $exists: true } });
    return res
      .status(204)
      .json({ message: "Item deleted, cart is now empty. User cart deleted." });
  }

  return res.json({ updatedCart });
};

exports.getCartItems = async (req, res) => {
  const { userId } = req.params; // Assuming userId is passed as a route parameter

  // Check if the user exists in the cart
  const userCart = await Cart.findOne({ [userId]: { $exists: true } });
  if (!userCart) {
    return res.status(404).json({ result: userCart });
  }

  const itemIds = Object.keys(userCart[userId]);

  try {
    // Fetch all products in parallel
    const products = await Promise.all(
      itemIds.map(async (id) => {
        const product = await Products.findOne({ _id: id });
        if (!product) {
          return null; // Return null if the product is not found
        }
        // Return the product with the cartValue
        return { ...product.toObject(), cartValue: userCart[userId][id] };
      })
    );

    // Filter out any null values (products not found)
    const filteredProducts = products.filter(Boolean);
    return res.json({ result: filteredProducts });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};
