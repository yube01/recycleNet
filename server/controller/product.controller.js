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
    productImage
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
      productImage
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};