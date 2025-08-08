import express from "express";
import {
  getCart,
  addToCart,
  updateCartQuantity,
  removeCartItem,
} from "../controllers/cartController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getCart); // Get user's cart
router.post("/add", authMiddleware, addToCart); // Add product
router.patch("/update", authMiddleware, updateCartQuantity); // Update quantity
router.delete("/remove/:productId", authMiddleware, removeCartItem); // Remove product

export default router;
