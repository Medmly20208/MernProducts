const express = require("express");
const productsController = require("../controllers/productController");

const Router = express.Router();

Router.get("/:userId", productsController.getAllproductByUserId);
Router.post("/", productsController.postProductByUserId);
Router.delete("/:productId", productsController.deleteProductById);
Router.patch("/:productId", productsController.patchProductById);

module.exports = Router;
