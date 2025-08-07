import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

export default function CrockeryDetails() {
  const { state } = useLocation();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!state?.item) {
    return (
      <div className="py-16 text-base text-center text-slate-500">
        Product not found.
      </div>
    );
  }

  // Extract fields from state.item
  const {
    name,
    imageUrl,
    material,
    price,
    originalPrice,
    description,
    category,
    rating,
    reviews,
    features,
    discount,
    inStock,
    isNew,
    isBestSeller,
    gradient
  } = state.item;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen px-4 py-32 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-xl" />

      {/* Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl p-6 text-white border shadow-2xl bg-white/10 backdrop-blur-2xl border-white/20 rounded-3xl sm:p-10"
      >
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Image and Badges */}
          <div className="relative mx-auto md:mx-0 md:w-1/3">
            <motion.img
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-64 transition-transform duration-300 border border-white shadow-xl md:h-80 rounded-2xl hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
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
            </div>
            <div className="absolute flex items-center gap-2 px-3 py-1 rounded-lg bottom-2 left-2 bg-white/90 backdrop-blur-sm">
              <div className={`w-2 h-2 rounded-full ${inStock ? 'bg-emerald-500' : 'bg-red-500'}`} />
              <span className="text-xs font-medium text-slate-700">
                {inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {name}
            </h1>
            <p className="mb-4 text-lg font-medium text-white/80">
              {state.item.subtitle}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(rating) 
                        ? 'text-yellow-500 fill-yellow-500' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">
                {rating}
              </span>
              <span className="text-xs text-white/70">
                ({reviews} reviews)
              </span>
            </div>

            {/* Tabs */}
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="space-y-2 md:w-1/4">
                {["overview", "specs", "features"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium capitalize transition duration-200 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow"
                        : "bg-white/20 text-white/80 hover:bg-white/30"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-4 text-sm md:w-3/4 text-white/90">
                {activeTab === "overview" && (
                  <>
                    <h2 className="text-xl font-semibold text-white">
                      Product Overview
                    </h2>
                    {description.length <= 200 ? (
                      <p className="leading-relaxed">
                        {description}
                      </p>
                    ) : (
                      <>
                        <p className="leading-relaxed">
                          {showFullDescription
                            ? description
                            : `${description.slice(0, 200)}...`}
                        </p>
                        <button
                          onClick={() => setShowFullDescription(!showFullDescription)}
                          className="mt-2 text-sm font-medium text-amber-400 hover:underline focus:outline-none"
                        >
                          {showFullDescription ? "Show Less" : "Show More"}
                        </button>
                      </>
                    )}
                  </>
                )}

                {activeTab === "specs" && (
                  <>
                    <h2 className="text-xl font-semibold text-white">
                      Specifications
                    </h2>
                    <ul className="ml-5 space-y-2 list-disc">
                      <li>
                        <strong>Category:</strong> {category}
                      </li>
                      <li>
                        <strong>Material:</strong> {material}
                      </li>
                      <li>
                        <strong>Price:</strong> {price}
                      </li>
                      {originalPrice && (
                        <li>
                          <strong>Original Price:</strong> {originalPrice}
                        </li>
                      )}
                      <li>
                        <strong>Dimensions:</strong> 20cm x 20cm x 3cm
                      </li>
                      <li>
                        <strong>Weight:</strong> 500g approx.
                      </li>
                    </ul>
                  </>
                )}

                {activeTab === "features" && (
                  <>
                    <h2 className="text-xl font-semibold text-white">
                      Features
                    </h2>
                    <ul className="ml-5 space-y-2 list-disc">
                      {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* Price and Add to Cart */}
            <div className="flex items-center justify-between pt-6 md:pt-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white">
                    {price}
                  </span>
                  {originalPrice && (
                    <span className="text-sm line-through text-white/70">
                      {originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-white/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-white rounded-lg hover:bg-white/30"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium text-white">
                    {quantity}
                  </span>
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
                  onClick={() => {
                    // Add to cart logic with quantity
                  }}
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