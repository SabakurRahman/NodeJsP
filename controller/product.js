const getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "This route will show all products in database",
  });
};

module.exports = { getAllProducts };