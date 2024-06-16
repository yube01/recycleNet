import { Product } from "../model/product.model.js";
import { User } from "../model/user.model.js";
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
    // Fetch the product details using the productId
    const productData = await Product.findById(productId);

    if (!productData) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Fetch the user details using the userId from the productData
    const userData = await User.findById(productData.userId);

    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Combine the product and user data into a single object
    const combinedData = {
      product: productData,
      user: userData,
    };

    // Send the combined data as the response
    res.status(200).json(combinedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
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

    // if (!data) {
    //   return res.status(404).json({ data});
    // }

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const sellConfirmTrue = async (req, res) => {
  const { cat } = req.params;
  try {
    const data = await Product.find({       $and: [
        { categoryName: cat },
        { sellConfirm: true }
      ]})
    res.status(200).json(data)
  
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const allSellConfirmTrue = async (req, res) => {
  try {
    const data = await Product.find({ sellConfirm: true });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

export const setListTrue = async(req,res)=>{
  const {productId} = req.params
  try {
    const data = await Product.findByIdAndUpdate(
      productId,
      { sellConfirm: true },
      { new: true }
    );

    // if (!data) {
    //   return res.status(404).json({ data});
    // }

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

export const setProductTrue = async (req, res) => {
  const {
    productName,
    quantity,
    address,
    contact,
    categoryName,
    userId,
    expiryDate,
    productImage,
    sellConfirm
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
      sellConfirm,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};