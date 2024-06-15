import mongoose from "mongoose";

const product = new mongoose.Schema(
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
      required: false,
    },
    contact: {
      type: Number,
      required: false,
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
      required: false,
    },
    productImage:{
      type:String,
      required:true
    }
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Products", product);
