import mongoose from "mongoose";

const Product = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
    },
    contact: {
      type: Number,
    },
    categoryName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    expiryDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("Product", product);
