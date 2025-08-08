// models/Cart.js
import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: String, // You can change to ObjectId if needed
  name: String,
  imageUrl: String,
  price: Number,
  quantity: { type: Number, default: 1 },
});

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [cartItemSchema],
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
