import express from "express";
import {
  createListing,
  deleteListing,
  editListing,
  getListing,
} from "../controller/listing.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, editListing);
router.get("/get/:id", getListing);

export default router;
