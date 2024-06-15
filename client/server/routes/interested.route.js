import express from "express";
import { addInterested } from "../controller/interested.controller.js";

const router = express.Router();

router.post("/addInterested",addInterested);


export default router