import express from "express";
import {
  addToCart,
  updateCartItem,
  deleteCartItem,
} from "../controllers/cartController.js";

const router = express.Router();
router.post("/", addToCart);
router.put("/:id", updateCartItem);
router.delete("/:id", deleteCartItem);

export default router;
