const express = require("express");

const router = express.Router();

const { getAllProducts } = require("../controller/product");

router.route("/test").get(getAllProducts);

// router.route("/products").get(getAllProducts);

module.exports = router;
