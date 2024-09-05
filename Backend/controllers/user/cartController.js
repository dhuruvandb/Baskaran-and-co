const {
  addCart,
  updateCart,
  deleteCart,
  viewCart,
  addOrUpdateCart,
} = require("../../helpers/helper");
const {
  find,
  findOneAndDelete,
  findOne,
} = require("../../helpers/mongooseHelpers");
const cart = require("../../models/cart");

// exports.handleCartUpdate = async (req, res) => {
//   try {
//     const { userId } = req.body;
//     console.log(req.body);

//     const itemId = Object.keys(req.body.items)[0];
//     const isUserPresent = await find(cart, { userId });
//     if (isUserPresent.length > 0) {
//       const result = await addOrUpdateCart(
//         { userId },
//         {
//           $set: { [`items.${itemId}`]: 1 },
//           // $unset: { [`items.${itemId}`]: "" },
//         }
//       );
//       res.status(200).json({ result });
//     } else {
//       const result = await addCart(req.body);
//       res.status(200).json({ result });
//       // const result = await addOrUpdateCart(
//       //   { userId },
//       //   {
//       //     $inc: { [`items.${itemId}`]: count },
//       //     // $unset: { [`items.${itemId}`]: "" },
//       //   }
//       // );
//       const isItemZero = await viewCart(
//         { userId },
//         { [`items.${itemId}`]: 1, _id: 0 }
//       );
//       console.log(isItemZero);

//       res.status(200).json({ result });
//       console.log("update or delete", result);
//     }

//     // {
//     //     $inc: { [`${Object.keys(req.body.items)[0]}`]: 1 },
//     //   }

//     // const result = await updateCart(
//     //   req.body,
//     //   {
//     //     $inc: { "items.$.count": count },
//     //   },
//     //   {
//     //     $pull: { items: { productId, count: 0 } },
//     //   }
//     // );

//     // if (isUserPresent.length > 0) {
//     //   res.redirect(`/updatecart/${isUserPresent[0].items[0].productId}`);
//     // } else {

//     // }
//   } catch (error) {
//     console.error(error);
//   }
// };

exports.handleCartUpdate = async (req, res) => {
  const userId = req.body.userId;
  const items = req.body.items; // Assume items is an object of itemId -> quantity

  try {
    // Create a map of updates using MongoDB operators
    const updates = {};
    Object.entries(items).forEach(([itemId, quantity]) => {
      if (quantity > 0) {
        updates[`items.${itemId}`] =
          (updates[`items.${itemId}`] || 0) + quantity;
      }
    });

    // Update the cart if it exists, otherwise create a new one
    await addOrUpdateCart({ userId }, { $set: updates });
    res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Error adding to cart" });
  }
};

exports.updateCart = async (req, res) => {
  const userId = req.params.userId;
  const { items, count } = req.body; // `items` is an object of itemId -> quantity, `count` is -1 or 1

  try {
    // Create a map of updates and removals
    const updates = {};
    const removals = {};

    Object.entries(items).forEach(([itemId, quantity]) => {
      if (count === 1) {
        // Increase item quantity
        updates[`items.${itemId}`] =
          (updates[`items.${itemId}`] || 0) + quantity;
      } else if (count === -1) {
        // Decrease item quantity
        updates[`items.${itemId}`] =
          (updates[`items.${itemId}`] || 0) - quantity;
        if (updates[`items.${itemId}`] <= 0) {
          removals[`items.${itemId}`] = "";
        }
      }
    });

    // Apply updates and removals to the cart
    await updateCart({ userId }, { $inc: updates, $unset: removals });

    // Check if the cart is empty after the update
    const updatedCart = await findOne(cart, { userId });
    
    if (!updatedCart || updatedCart.items.size === 0) {
      await deleteCart({ userId });
      res
        .status(200)
        .json({ message: "Cart cleared and deleted successfully" });
    } else {
      res.status(200).json({ message: "Cart updated successfully" });
    }
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ error: "Error updating cart" });
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

exports.getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await viewCart({ userId }, { items: 1 });

    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};
