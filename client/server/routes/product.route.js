import express from "express";
import { addProduct, allSellConfirmTrue, getProductByCategory, getProductById, getProductDetail, sellConfirm, sellConfirmTrue } from "../controller/product.controller.js";

const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/userId/:id", getProductById);
router.get("/category/:categoryName", getProductByCategory);
router.get("/productDetail/:productId", getProductDetail);


router.get("/sellConfirm/:cat",sellConfirm)
router.put("/allSellConfirm/:productId",allSellConfirmTrue)
router.get("/catSellConfirm/:cat",sellConfirmTrue)

export default router;