const {
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../../helpers/helper");

exports.addCategory = async (req, res) => {
  try {
    const result = await addCategory(req.body);
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const result = await updateCategory({ _id: req.params.id }, req.body);
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const result = await deleteCategory({ _id: req.params.id });
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};
