import express from "express";
import { addProduct, getProductByCategory, getProductById, getProductDetail } from "../controller/product.controller.js";

const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/userId/:id", getProductById);
router.get("/category/:categoryName", getProductByCategory);
router.get("/productDetail/:productId", getProductDetail);

export default router;