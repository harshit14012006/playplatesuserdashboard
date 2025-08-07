import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HiHeart, HiEye, HiShieldCheck } from 'react-icons/hi';

const CrockeryGrid = ({ items }) => {
  const navigate = useNavigate();

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  const handleCardClick = (item) => {
    navigate(`/crockery-details/${item._id}`, {
      state: {
        item: {
          ...item,
          imageUrl: item.imageUrl || item.image,
          description: item.description || 'No description available.',
          rating: item.rating || 4.5,
          reviews: item.reviews || 0,
          features: item.features || [],
          benefits: item.benefits || [],
          discount: item.discount || `${Math.round(((item.price + 150 - item.price) / (item.price + 150)) * 100)}% OFF`,
          inStock: item.inStock !== undefined ? item.inStock : true,
          isNew: item.isNew || false,
          isBestSeller: item.isBestSeller || false,
          qualityRating: item.qualityRating || 'A',
          gradient: item.gradient || 'from-amber-500 to-orange-600',
          subtitle: item.subtitle || 'Premium Crockery',
          originalPrice: item.originalPrice || (item.price + 150).toString(),
        },
      },
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3 sm:px-6 max-w-7xl">
      {items.map((item, index) => (
        <motion.div
          key={item._id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -12, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
          onClick={() => handleCardClick(item)}
          className="relative overflow-hidden transition-all duration-500 border-2 shadow-2xl cursor-pointer group bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl border-white/40 rounded-3xl hover:shadow-3xl"
        >
          {/* Premium Background Elements */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
          <div className="absolute top-0 right-0 w-32 h-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-bl from-white/30 to-transparent" />

          {/* Badges */}
          <div className="absolute z-20 flex flex-col gap-2 top-4 left-4">
            {item.discount && (
              <motion.span
                className={`px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r ${item.gradient || 'from-amber-500 to-orange-600'}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {item.discount}
              </motion.span>
            )}
            {item.isNew && (
              <span className="px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-emerald-500">
                NEW
              </span>
            )}
            {item.isBestSeller && (
              <span className="px-3 py-1 text-xs font-bold text-white bg-yellow-500 rounded-full shadow-lg">
                BESTSELLER
              </span>
            )}
            {item.qualityRating && (
              <span
                className={`px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg ${
                  item.qualityRating === 'A+' ? 'bg-green-500' : 'bg-blue-500'
                }`}
              >
                Quality: {item.qualityRating}
              </span>
            )}
          </div>

          {/* Floating Action Buttons */}
          <div className="absolute z-20 flex flex-col gap-2 top-4 right-4">
            <motion.button
              className="flex items-center justify-center w-10 h-10 transition-all border rounded-full shadow-lg opacity-0 bg-white/90 backdrop-blur-sm border-white/40 group-hover:opacity-100"
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                // Add to wishlist logic
              }}
              aria-label="Add to wishlist"
            >
              <HiHeart className="text-slate-600" />
            </motion.button>
            <motion.button
              className="flex items-center justify-center w-10 h-10 transition-all border rounded-full shadow-lg opacity-0 bg-white/90 backdrop-blur-sm border-white/40 group-hover:opacity-100"
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                // Quick view logic
              }}
              aria-label="Quick view"
            >
              <HiEye className="text-slate-600" />
            </motion.button>
          </div>

          {/* Image */}
          <div className="relative z-10 p-6 pb-0">
            <motion.div
              className="relative mb-4"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient || 'from-amber-500 to-orange-600'} rounded-2xl blur-2xl opacity-20 scale-110`}
              />
              <img
                src={item.imageUrl || item.image}
                alt={item.name}
                className="relative z-10 object-contain w-full h-48 shadow-xl rounded-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 pb-6 space-y-2">
            {/* Rating & Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(item.rating || 4.5)
                        ? 'text-yellow-500 fill-yellow-500'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-700">
                {item.rating || 4.5}
              </span>
              <span className="text-xs text-slate-500">({item.reviews || 0} reviews)</span>
            </div>

            <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">{item.name}</h2>
            <p className="text-sm text-gray-500">
              {item.category} — {item.material}
            </p>

            {(item.features || item.benefits) && (
              <div className="mb-2">
                <div className="flex flex-wrap gap-1">
                  {(item.benefits || item.features || []).slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs font-medium bg-gradient-to-r ${item.gradient || 'from-amber-500 to-orange-600'} text-white rounded-full`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-base font-bold text-gray-900">₹{item.price}</span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{item.originalPrice || item.price + 150}
                </span>
              </div>
              <motion.button
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r ${item.gradient || 'from-amber-500 to-orange-600'} rounded-md shadow-lg hover:shadow-xl transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  // Add to cart logic
                }}
                aria-label="Add to cart"
              >
                <ShoppingCart className="w-4 h-4" />
                Add
              </motion.button>
            </div>
          </div>

          <motion.div
            className={`absolute inset-0 bg-gradient-to-t ${item.gradient || 'from-amber-500 to-orange-600'} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
            initial={false}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CrockeryGrid;