const mongoose = require("mongoose");

const product = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("products", product);

module.exports = productModel;
