import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HiHeart, HiEye, HiShieldCheck } from 'react-icons/hi';

const ToysGrid = ({ toys }) => {
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

  const handleCardClick = (toy) => {
    navigate(`/toy-details/${toy._id}`, {
      state: {
        item: {
          ...toy,
          imageUrl: toy.imageUrl || toy.image,
          description: toy.description || 'No description available.',
          rating: toy.rating || 4.5,
          reviews: toy.reviews || 0,
          features: toy.features || [],
          benefits: toy.benefits || [],
          discount: toy.discount || `${Math.round(((toy.price + 150 - toy.price) / (toy.price + 150)) * 100)}% OFF`,
          inStock: toy.inStock !== undefined ? toy.inStock : true,
          isNew: toy.isNew || false,
          isBestSeller: toy.isBestSeller || false,
          safetyRating: toy.safetyRating || 'A',
          gradient: toy.gradient || 'from-pink-500 to-purple-600',
          subtitle: toy.subtitle || 'Premium Toy',
          originalPrice: toy.originalPrice || (toy.price + 150).toString(),
        },
      },
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3 sm:px-6 max-w-7xl">
      {toys.map((toy, index) => (
        <motion.div
          key={toy._id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -12, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
          onClick={() => handleCardClick(toy)}
          className="relative overflow-hidden transition-all duration-500 border-2 shadow-2xl cursor-pointer group bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl border-white/40 rounded-3xl hover:shadow-3xl"
        >
          {/* Premium Background Elements */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
          <div className="absolute top-0 right-0 w-32 h-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-bl from-white/30 to-transparent" />

          {/* Badges */}
          <div className="absolute z-20 flex flex-col gap-2 top-4 left-4">
            {toy.discount && (
              <motion.span
                className={`px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r ${toy.gradient || 'from-pink-500 to-purple-600'}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {toy.discount}
              </motion.span>
            )}
            {toy.isNew && (
              <span className="px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-emerald-500">
                NEW
              </span>
            )}
            {toy.isBestSeller && (
              <span className="px-3 py-1 text-xs font-bold text-white bg-yellow-500 rounded-full shadow-lg">
                BESTSELLER
              </span>
            )}
            {toy.safetyRating && (
              <span
                className={`px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg ${
                  toy.safetyRating === 'A+' ? 'bg-green-500' : 'bg-blue-500'
                }`}
              >
                Safety: {toy.safetyRating}
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
                className={`absolute inset-0 bg-gradient-to-r ${toy.gradient || 'from-pink-500 to-purple-600'} rounded-2xl blur-2xl opacity-20 scale-110`}
              />
              <img
                src={toy.imageUrl || toy.image}
                alt={toy.name}
                className="relative z-10 object-contain w-full h-48 shadow-xl rounded-2xl"
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
                      i < Math.floor(toy.rating || 4.5)
                        ? 'text-yellow-500 fill-yellow-500'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-700">
                {toy.rating || 4.5}
              </span>
              <span className="text-xs text-slate-500">
                ({toy.reviews || 0} reviews)
              </span>
            </div>

            <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
              {toy.name}
            </h2>
            <p className="text-sm text-gray-500">
              {toy.category} — {toy.ageGroup}
            </p>

            {(toy.features || toy.benefits) && (
              <div className="mb-2">
                <div className="flex flex-wrap gap-1">
                  {(toy.benefits || toy.features || []).slice(0, 2).map((item, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs font-medium bg-gradient-to-r ${toy.gradient || 'from-pink-500 to-purple-600'} text-white rounded-full`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-base font-bold text-gray-900">₹{toy.price}</span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{toy.originalPrice || toy.price + 150}
                </span>
              </div>
              <motion.button
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r ${toy.gradient || 'from-pink-500 to-purple-600'} rounded-md shadow-lg hover:shadow-xl transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  // Add to cart logic
                }}
              >
                <ShoppingCart className="w-4 h-4" />
                Add
              </motion.button>
            </div>
          </div>

          <motion.div
            className={`absolute inset-0 bg-gradient-to-t ${toy.gradient || 'from-pink-500 to-purple-600'} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
            initial={false}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ToysGrid;