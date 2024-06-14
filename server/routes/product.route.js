import express from "express"
import { product } from "../controller/product.controller"

const router = express.Router()


router.post("/addProduct",product)

export default router