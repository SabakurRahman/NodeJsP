const product = require("../models/product");

const getAllProducts = async (req, res) => {
  const getData = await product.find({});
  res.status(200).json({
    success: true,
    message: "This route will show all products in database",
    data: getData,
  });
};

module.exports = { getAllProducts };
