const {
  getAllProduct,
  getOneProduct,
  viewCategory,
} = require("../../helpers/helper");

exports.getAllProducts = async (req, res) => {
  const result = await getAllProduct();
  console.log(result)
  res.status(200).json({ result });
};

exports.getOneProduct = async (req, res) => {
  const result = await getOneProduct({ _id: req.params.id });
  res.status(200).json({ result });
};

exports.getCategory = async (req, res) => {
  const result = await viewCategory();
  res.status(200).json({ result });
};
