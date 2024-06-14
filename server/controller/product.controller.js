import { Product } from "../model/product.model.js";

export const product = async (req, res) => {
  const {
    productName,
    quantity,
    address,
    contact,
    categoryName,
    userId,
    expiryDate,
  } = req.body;

  try {
    const newUser = new Product({
      productName,
      quantity,
      address,
      contact,
      categoryName,
      userId,
      expiryDate,
    });

    const user = await newUser.save();
    res.status(200).json("Product Added");
  } catch (error) {
    console.log(error);
  }
};
