const productModel = require("../models/products.model");
const catchAsync = require("../utils/catchAsync");
// get products by user Id
exports.getAllproductByUserId = catchAsync(async (req, res, next) => {
  const products = await productModel.find({ userId: req.params.userId });

  return res.status(200).json({
    status: "success",
    data: products,
  });
});

//post product by userId
exports.postProductByUserId = catchAsync(async (req, res, next) => {
  const product = await productModel.create(req.body);

  return res.status(200).json({
    status: "success",
    data: product,
  });
});

//delete product by id
exports.deleteProductById = catchAsync(async (req, res, next) => {
  const product = await productModel.deleteOne({ _id: req.params.productId });

  return res.status(200).json({
    status: "success",
    message: "product deleted successfully",
  });
});

//patch product by id
exports.patchProductById = catchAsync(async (req, res, next) => {
  const product = await productModel.updateOne(
    { _id: req.params.productId },
    req.body,
    { new: true }
  );

  return res.status(200).json({
    status: "success",
    message: "product updated successfully",
  });
});
