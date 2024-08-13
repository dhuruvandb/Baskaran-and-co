const {
  getAllProducts,
  getOneProduct,
  viewCart,
} = require("../../helpers/helper");

`This function retrieves all products along with the items in the cart and displays them in the UI.
 If a product is already in the cart, its quantity will be shown alongside the product in the list.`;
exports.getAllUserProducts = async (req, res) => {
  const result = await getAllProducts();
  const cart_result = (await viewCart(req.body, { items: 1, _id: 0 })).map(
    (data) => data.items
  )[0];

  res.status(200).json({ result });
};

exports.getOneUserProduct = async (req, res) => {
  console.log(req.params.id);

  const result = await getOneProduct({ _id: req.params.id });
  console.log(result);

  res.status(200).json({ result });
};
