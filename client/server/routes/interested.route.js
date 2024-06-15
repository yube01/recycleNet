import express from "express";
import { addInterested, interestedBuyer } from "../controller/interested.controller.js";

const router = express.Router();

router.post("/addInterested",addInterested);
router.get("/interestedBuyer",interestedBuyer)


export default router