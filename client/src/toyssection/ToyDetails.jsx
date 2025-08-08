import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";

export default function ToyDetails() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("overview");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!state?.item) {
    return (
      <div className="py-20 text-center text-slate-500">Product not found.</div>
    );
  }

  const addToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login to add items to cart");
        return;
      }

      const productData = {
        productId: id,
        name,
        imageUrl: imageSrc,
        price,
        quantity,
      };

      const res = await axios.post(
        "http://localhost:8000/cart/add",
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Item added to cart successfully");
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error.response?.data || error.message);
      if (error.response && error.response.status === 401) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  const {
    name,
    imageUrl,
    image,
    price,
    originalPrice,
    material,
    category,
    ageGroup,
    description,
    rating,
    reviews,
    features,
    discount,
    inStock,
    isNew,
    isBestSeller,
    safetyRating,
    benefits,
    gradient
  } = state.item;

  const imageSrc = imageUrl || image;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen px-4 py-24 bg-center bg-no-repeat bg-cover sm:py-32"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-xl" />

      {/* Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl px-4 py-8 text-white border shadow-2xl sm:px-10 sm:py-12 bg-white/10 backdrop-blur-2xl border-white/20 rounded-3xl"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all border top-4 left-4 bg-white/10 border-white/20 rounded-xl hover:bg-white/20 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Content */}
        <div className="flex flex-col-reverse gap-10 mt-12 md:flex-row md:mt-6">
          {/* Image */}
          <div className="relative w-full mx-auto md:mx-0 md:w-1/3">
            <motion.img
              src={imageSrc}
              alt={name}
              className="object-cover w-full h-64 transition-transform duration-300 border border-white shadow-xl md:h-80 rounded-2xl hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />

            {/* Badges */}
            <div className="absolute flex flex-col gap-2 top-4 left-4">
              {discount && (
                <span className={`px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r ${gradient}`}>
                  {discount}
                </span>
              )}
              {isNew && (
                <span className="px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-emerald-500">
                  NEW
                </span>
              )}
              {isBestSeller && (
                <span className="px-3 py-1 text-xs font-bold text-white bg-yellow-500 rounded-full shadow-lg">
                  BESTSELLER
                </span>
              )}
              {safetyRating && (
                <span className={`px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg ${safetyRating === 'A+' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                  Safety: {safetyRating}
                </span>
              )}
            </div>

            {/* Stock */}
            <div className="absolute flex items-center gap-2 px-3 py-1 rounded-lg bottom-2 left-2 bg-white/90 backdrop-blur-sm">
              <div className={`w-2 h-2 rounded-full ${inStock ? 'bg-emerald-500' : 'bg-red-500'}`} />
              <span className="text-xs font-medium text-slate-700">
                {inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-2xl font-bold sm:text-4xl">{name}</h1>
              <p className="mt-2 text-sm sm:text-lg text-white/80">{state.item.subtitle}</p>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                    }`}
                />
              ))}
              <span className="text-sm font-semibold">{rating}</span>
              <span className="text-xs text-white/70">({reviews} reviews)</span>
            </div>

            {/* Tabs */}
            <div className="flex flex-col gap-6 sm:flex-row">
              {/* Tab Buttons */}
              <div className="space-y-2 sm:w-1/4">
                {["overview", "specs", "features", "benefits"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium capitalize transition duration-200 ${activeTab === tab
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow"
                      : "bg-white/20 text-white/80 hover:bg-white/30"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-4 text-sm sm:w-3/4 text-white/90">
                {activeTab === "overview" && (
                  <>
                    <h2 className="text-xl font-semibold text-white">Product Overview</h2>
                    {description.length <= 200 ? (
                      <p className="leading-relaxed">{description}</p>
                    ) : (
                      <>
                        <p className="leading-relaxed">
                          {showFullDescription ? description : `${description.slice(0, 200)}...`}
                        </p>
                        <button
                          onClick={() => setShowFullDescription(!showFullDescription)}
                          className="mt-2 text-sm font-medium text-pink-400 hover:underline focus:outline-none"
                        >
                          {showFullDescription ? "Show Less" : "Show More"}
                        </button>
                      </>
                    )}
                  </>
                )}

                {activeTab === "specs" && (
                  <>
                    <h2 className="text-xl font-semibold text-white">Specifications</h2>
                    <ul className="ml-5 space-y-2 list-disc">
                      {material && <li><strong>Material:</strong> {material}</li>}
                      {category && <li><strong>Category:</strong> {category}</li>}
                      {ageGroup && <li><strong>Age Group:</strong> {ageGroup}</li>}
                      {safetyRating && <li><strong>Safety Rating:</strong> {safetyRating}</li>}
                      <li><strong>Price:</strong> {price}</li>
                      {originalPrice && <li><strong>Original Price:</strong> {originalPrice}</li>}
                      <li><strong>Dimensions:</strong> 15cm x 15cm x 10cm</li>
                      <li><strong>Weight:</strong> 300g approx.</li>
                    </ul>
                  </>
                )}

                {activeTab === "features" && (
                  <>
                    <h2 className="text-xl font-semibold text-white">Features</h2>
                    <ul className="ml-5 space-y-2 list-disc">
                      {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}

                {activeTab === "benefits" && (
                  <>
                    <h2 className="text-xl font-semibold text-white">Learning Benefits</h2>
                    <ul className="ml-5 space-y-2 list-disc">
                      {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* Pricing */}
            <div className="flex flex-col items-start gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{price}</span>
                {originalPrice && (
                  <span className="text-sm line-through text-white/70">{originalPrice}</span>
                )}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-white/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-white rounded-lg hover:bg-white/30"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-white rounded-lg hover:bg-white/30"
                  >
                    +
                  </button>
                </div>
                <motion.button
                  className={`flex items-center gap-2 bg-gradient-to-r ${gradient} text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={addToCart}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
