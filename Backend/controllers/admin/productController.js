const {
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../../helpers/helper");

exports.addProduct = async (req, res) => {
  try {
    const result = await addProduct(req.body);
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const result = await updateProduct({ _id: req.params.id }, req.body);
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const result = await deleteProduct({ _id: req.params.id });
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};
