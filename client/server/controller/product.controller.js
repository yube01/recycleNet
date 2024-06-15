import { Product } from "../model/product.model.js";

export const addProduct = async (req, res) => {
  const {
    productName,
    quantity,
    address,
    contact,
    categoryName,
    userId,
    expiryDate,
    productImage,
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
      productImage,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Product.find({ userId: id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getProductByCategory = async (req, res) => {
  const { categoryName } = req.params;

  try {
    const data = await Product.find({ categoryName });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetail = async (req, res) => {
  const { productId } = req.params;

  try {
    const data = await Product.findById(productId);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const sellConfirm = async (req, res) => {
  const { productId } = req.params;

  try {
    const data = await Product.findByIdAndUpdate(
      productId,
      { sellConfirm: true },
      { new: true }
    );

    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const sellConfirmTrue = async (req, res) => {
  const { cat } = req.params;
  try {
    const data = await Product.find({ cat, sellConfirm: true });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

export const allSellConfirmTrue = async(req,res)=>{
  try {
    const data = await Product.find({ sellConfirm: true });
res.status(200).json(data);
  } catch (error) {
    console.log(error)
  }
}