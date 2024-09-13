const {
  getOneProduct,
  viewCategory,
  getAllProducts,
} = require("../../helpers/helper");

exports.fetchAllProducts = async (req, res) => {
  try {
    const { category } = req.params;
    const result = await getAllProducts({ category });
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.getOneProduct = async (req, res) => {
  const result = await getOneProduct(req.params.id);
  console.log({ result }, "called...........");

  res.status(200).json({ result });
};

exports.getCategory = async (req, res) => {
  const result = await viewCategory();
  console.log({ result }, "not called ................");

  res.status(200).json({ result });
};
