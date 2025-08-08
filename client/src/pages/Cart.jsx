import React, { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft, FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRemoving, setIsRemoving] = useState(null);
  const [showConfirm, setShowConfirm] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(res.data.cart?.items || []);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch cart items");
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  const updateQuantity = useCallback(
    async (productId, newQuantity) => {
      if (newQuantity < 1) return;

      // Optimistic UI update
      setCartItems((prev) =>
        prev.map((item) =>
          item.productId === productId ? { ...item, quantity: newQuantity } : item
        )
      );

      try {
        await axios.patch(
          `http://localhost:8000/cart/update`,
          { productId, quantity: newQuantity },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (err) {
        console.error("Update failed", err);
        setError("Failed to update quantity");
        fetchCart(); // Revert on failure
      }
    },
    [token, fetchCart]
  );

  const removeItem = useCallback(
    async (productId) => {
      setIsRemoving(productId);
      try {
        await axios.delete(`http://localhost:8000/cart/remove/${productId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchCart();
      } catch (err) {
        console.error("Remove failed", err);
        setError("Failed to remove item");
      } finally {
        setIsRemoving(null);
        setShowConfirm(null);
      }
    },
    [token, fetchCart]
  );

  const clearCart = useCallback(async () => {
    if (!window.confirm("Are you sure you want to clear your cart?")) return;
    try {
      await axios.delete("http://localhost:8000/cart/clear", {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCart();
    } catch (err) {
      console.error("Clear cart failed", err);
      setError("Failed to clear cart");
    }
  }, [token, fetchCart]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const total = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItems]
  );

  const handleQuantityChange = (productId, value) => {
    const newQuantity = parseInt(value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };


  const handlePayment = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/payment/create-order", {
        amount: total, // backend expects amount in rupees
      });

      const { id: order_id, amount, currency } = res.data;

      const options = {
        key: "rzp_test_rfKhz2FQfA5HHz", // replace with your test key
        amount,
        currency,
        name: "PlayPlates",
        description: "Test Transaction",
        order_id,
        handler: function (response) {
          alert("Payment successful!");
          console.log("Razorpay Response:", response);
          // Optionally call backend to verify payment here
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "PlayPlates Corporate Office",
        },
        theme: {
          color: "#0f766e",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div className="max-w-6xl px-4 pb-12 mx-auto pt-38 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            <FiShoppingCart className="inline-block mr-2" /> Your Cart
          </h1>
          <span className="text-sm font-medium text-gray-500">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
          </span>
        </motion.div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center justify-between p-4 mb-6 text-red-800 bg-red-100 rounded-lg"
            >
              <p>{error}</p>
              <button
                onClick={() => setError("")}
                className="text-red-800 hover:text-red-900"
                aria-label="Dismiss error"
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col items-start gap-4 p-4 bg-white border border-gray-200 sm:flex-row rounded-xl animate-pulse"
              >
                <div className="w-full h-24 bg-gray-200 rounded-md sm:w-24"></div>
                <div className="flex-grow space-y-2">
                  <div className="w-3/4 h-6 bg-gray-200 rounded"></div>
                  <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                  <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-6 lg:col-span-2">
              <AnimatePresence>
                {cartItems.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-8 text-center bg-white border border-gray-200 shadow-sm rounded-xl"
                  >
                    <FiShoppingCart className="mx-auto mb-4 text-4xl text-gray-400" />
                    <p className="mb-4 text-lg text-gray-600">Your cart is empty.</p>
                    <button
                      onClick={() => navigate("/products")}
                      className="inline-flex items-center px-6 py-3 font-semibold text-white transition bg-teal-500 rounded-lg hover:bg-teal-600"
                    >
                      <FiShoppingCart className="mr-2" /> Shop Now
                    </button>
                  </motion.div>
                ) : (
                  cartItems.map((item) => (
                    <motion.div
                      key={item.productId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-start gap-4 p-4 transition-shadow bg-white border border-gray-200 shadow-sm sm:flex-row rounded-xl hover:shadow-md"
                    >
                      <img
                        src={item.imageUrl || "https://via.placeholder.com/150"}
                        alt={item.name}
                        className="object-cover w-full h-20 border border-gray-100 rounded-md sm:w-20"
                        loading="lazy"
                      />
                      <div className="flex-grow">
                        <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                        <p className="text-sm text-gray-600">Price: ₹{item.price}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <label
                            htmlFor={`quantity-${item.productId}`}
                            className="text-sm text-gray-700"
                          >
                            Quantity:
                          </label>
                          <div className="flex items-center overflow-hidden border rounded-md">
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              className="px-3 py-2 transition bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                              disabled={item.quantity <= 1 || isRemoving === item.productId}
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              <FiMinus />
                            </button>
                            <input
                              id={`quantity-${item.productId}`}
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.productId, e.target.value)}
                              className="w-12 text-center text-gray-900 bg-white border-none focus:ring-0"
                              min="1"
                              aria-label={`Quantity of ${item.name}`}
                            />
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="px-3 py-2 transition bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                              disabled={isRemoving === item.productId}
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <FiPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => setShowConfirm(item.productId)}
                          className="flex items-center text-sm font-medium text-red-600 transition hover:text-red-700 disabled:opacity-50"
                          disabled={isRemoving === item.productId}
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          {isRemoving === item.productId ? (
                            <div className="w-4 h-4 mr-2 border-2 border-red-500 rounded-full border-t-transparent animate-spin"></div>
                          ) : (
                            <FiTrash2 className="mr-1" />
                          )}
                          Remove
                        </button>
                        <p className="text-sm font-medium text-gray-700">
                          Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Cart Summary */}
            {cartItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky p-6 bg-white border border-gray-200 shadow-sm lg:col-span-1 rounded-xl top-24"
              >
                <h2 className="mb-4 text-xl font-semibold text-gray-900">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-gray-900">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={handlePayment}
                    className="w-full px-6 py-3 font-semibold text-white transition rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 disabled:opacity-50"
                    disabled={cartItems.length === 0}
                    aria-label="Proceed to checkout"
                  >
                    ✅ Proceed to Checkout
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full px-6 py-3 font-medium text-gray-700 transition bg-gray-100 rounded-lg hover:bg-gray-200"
                    aria-label="Clear cart"
                  >
                    Clear Cart
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Back Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-6 py-3 font-medium text-white transition bg-gray-600 rounded-lg hover:bg-gray-700"
            aria-label="Back to shopping"
          >
            <FiArrowLeft className="mr-2" /> Back to Shopping
          </button>
        </div>

        {/* Confirmation Modal */}
        <AnimatePresence>
          {showConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="w-full max-w-sm p-6 bg-white shadow-lg rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Remove Item
                </h3>
                <p className="mb-6 text-gray-600">
                  Are you sure you want to remove this item from your cart?
                </p>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setShowConfirm(null)}
                    className="px-4 py-2 text-gray-700 transition bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => removeItem(showConfirm)}
                    className="px-4 py-2 text-white transition bg-red-600 rounded-lg hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cart;