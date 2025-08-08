import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  try {
    const { productId, name, imageUrl, price, quantity } = req.body;
    const userId = req.user._id;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [
          {
            productId,
            name,
            imageUrl,
            price,
            quantity: Number(quantity) || 1,
          },
        ],
      });
    } else {
      const existingItem = cart.items.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += Number(quantity) || 1;
      } else {
        cart.items.push({
          productId,
          name,
          imageUrl,
          price,
          quantity: Number(quantity) || 1,
        });
      }
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error adding to cart", error: err.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    res.status(200).json({ cart });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching cart", error: err.message });
  }
};

export const updateCartQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    if (!productId || quantity < 1) {
      return res.status(400).json({ message: "Invalid data" });
    }

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    cart.items[itemIndex].quantity = quantity;

    await cart.save();

    res.status(200).json({ message: "Quantity updated successfully" });
  } catch (err) {
    console.error("Error updating quantity:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const removeCartItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const initialLength = cart.items.length;

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    if (cart.items.length === initialLength) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    await cart.save();

    res.status(200).json({ message: "Item removed successfully" });
  } catch (err) {
    console.error("Error removing item from cart:", err);
    res.status(500).json({ message: "Server error" });
  }
};
