// CrockerySample.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  HiHeart, 
  HiEye, 
  HiStar, 
  HiSparkles,
  HiLightningBolt
} from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';

export default function CrockerySample() {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Professional color palette
  const professionalColors = {
    primary: '#1e293b', // slate-800
    secondary: '#334155', // slate-700
    accent: '#10b981', // emerald-500
    amber: '#f59e0b', // amber-500
    rose: '#f43f5e' // rose-500
  };

  // Enhanced crockery data with professional details
  const crockeryItems = [
    {
      id: "1",
      name: "Elegant Plate Set",
      subtitle: "Premium Dinnerware Collection",
      material: "Fine Bone Ceramic",
      price: "₹799",
      originalPrice: "₹999",
      discount: "20% OFF",
      rating: 4.8,
      reviews: 234,
      inStock: true,
      isNew: false,
      isBestSeller: true,
      features: ["Dishwasher Safe", "Microwave Safe", "Chip Resistant"],
      category: "dinnerware",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn9GcTn0wjJwBSiAemWthfihyJz5QEBt7vlmCgH1D4ha9kZ0NhVeVUVJPZl7DzKHcvUaAWL1lPZeHuuZPDS8m28zISZNcKiRCORPOPMYpEQlkhf",
      description: "Elevate your dining experience with this elegant plate set, crafted from fine bone ceramic for durability and style. Perfect for formal dinners or everyday use, these plates are dishwasher and microwave safe, offering both practicality and sophistication.",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      id: "2",
      name: "Classic Tea Cups",
      subtitle: "Vintage Inspired Collection",
      material: "Premium Porcelain",
      price: "₹499",
      originalPrice: "₹699",
      discount: "29% OFF",
      rating: 4.9,
      reviews: 189,
      inStock: true,
      isNew: true,
      isBestSeller: false,
      features: ["Heat Retention", "Elegant Design", "Gift Ready"],
      category: "drinkware",
      image: "https://vigneto.in/cdn/shop/products/20220806_104542384_iOS-Copy.jpg?v=1659784744&width=823",
      description: "Enjoy your tea in style with these vintage-inspired porcelain cups. Designed for excellent heat retention and a comfortable grip, this set is perfect for gifting or adding a touch of elegance to your tea time rituals.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      id: "3",
      name: "Modern Serving Bowls",
      subtitle: "Contemporary Kitchen Essentials",
      material: "Artisan Stoneware",
      price: "₹1,299",
      originalPrice: "₹1,599",
      discount: "19% OFF",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      isNew: false,
      isBestSeller: true,
      features: ["Scratch Resistant", "Easy Clean", "Versatile Use"],
      category: "serveware",
      image: "https://exclusivelane.com/cdn/shop/files/EL-005-2357_A_result_580x.webp?v=1752834070",
      description: "These modern serving bowls, crafted from artisan stoneware, are perfect for any occasion. Their scratch-resistant finish and versatile design make them ideal for serving salads, pasta, or desserts with a contemporary flair.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      id: "4",
      name: "Stylish Mug Set",
      subtitle: "Luxury Coffee Experience",
      material: "Fine Bone China",
      price: "₹649",
      originalPrice: "₹899",
      discount: "28% OFF",
      rating: 4.6,
      reviews: 278,
      inStock: true,
      isNew: true,
      isBestSeller: false,
      features: ["Premium Feel", "Perfect Grip", "Designer Look"],
      category: "drinkware",
      image: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwe3e51e5d/original/90_N29220-N403771_N1931_20_Medusa~Gala~Mug~2~Set-Coffee~~Tea-Versace-online-store_0_0.jpg?sw=850&q=85&strip=true",
      description: "Indulge in luxury with this stylish mug set, made from fine bone china for a premium feel. With a designer look and perfect grip, these mugs are ideal for enjoying your morning coffee or evening tea in style.",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50"
    }
  ];

  // Filter and sort functionality
  const filteredAndSortedItems = useMemo(() => {
    let filtered = crockeryItems;
    
    if (selectedFilter !== 'all') {
      filtered = crockeryItems.filter(item => item.category === selectedFilter);
    }
    
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return parseFloat(a.price.replace('₹', '').replace(',', '')) - parseFloat(b.price.replace('₹', '').replace(',', ''));
        case 'price-high': return parseFloat(b.price.replace('₹', '').replace(',', '')) - parseFloat(a.price.replace('₹', '').replace(',', ''));
        case 'rating': return b.rating - a.rating;
        case 'newest': return b.isNew - a.isNew;
        default: return 0;
      }
    });
  }, [selectedFilter, sortBy]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <section className="relative px-4 py-16 overflow-hidden sm:px-6 lg:px-8 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(15,23,42,0.03)_1px,transparent_0)] bg-[length:16px_16px] sm:bg-[length:20px_20px] lg:bg-[length:24px_24px]" />
        <motion.div
          className="absolute w-48 h-48 rounded-full top-10 sm:top-20 left-5 sm:left-10 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-2xl sm:blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-56 h-56 rounded-full bottom-10 sm:bottom-20 right-5 sm:right-10 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl sm:blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center sm:mb-12 lg:mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-4 sm:gap-3 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center w-10 h-10 shadow-xl sm:w-12 sm:h-12 bg-gradient-to-r from-slate-800 to-slate-600 rounded-xl sm:rounded-2xl">
              <HiSparkles className="text-xl text-white sm:text-2xl" />
            </div>
            <div className="w-12 h-1 rounded-full sm:w-16 bg-gradient-to-r from-amber-500 to-orange-500" />
          </motion.div>
          
          <motion.h2
            className="mb-4 text-3xl font-black leading-tight sm:mb-6 sm:text-4xl lg:text-5xl text-slate-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Premium Crockery
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Collection
            </span>
          </motion.h2>
          
          <motion.p
            className="max-w-xl mx-auto mb-6 text-base font-light leading-relaxed sm:max-w-2xl lg:max-w-3xl sm:mb-8 sm:text-lg lg:text-xl text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover our curated selection of premium crockery designed for elegance, durability, and exceptional dining experiences
          </motion.p>

          {/* Enhanced Controls */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 p-2 border shadow-lg bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border-slate-200/50">
              {[
                { value: 'all', label: 'All Items' },
                { value: 'dinnerware', label: 'Dinnerware' },
                { value: 'drinkware', label: 'Drinkware' },
                { value: 'serveware', label: 'Serveware' }
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                    selectedFilter === filter.value
                      ? 'bg-slate-800 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Sort & Search */}
            <div className="flex items-center gap-2 sm:gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 text-xs font-medium border rounded-lg sm:px-4 sm:py-2 sm:text-sm bg-white/80 backdrop-blur-xl border-slate-200/50 sm:rounded-xl text-slate-700 focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
              
              <button className="p-2 transition-all border rounded-lg shadow-md sm:p-3 bg-white/80 backdrop-blur-xl border-slate-200/50 text-slate-600 sm:rounded-xl hover:shadow-lg">
                <FaSearch className="text-xs sm:text-sm" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8"
        >
          {filteredAndSortedItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              onClick={() => navigate(`/crockery-details/${item.id}`, { state: { item: { ...item, imageUrl: item.image } } })}
              className="relative cursor-pointer group"
            >
              <div className={`bg-gradient-to-br ${item.bgGradient} backdrop-blur-xl border-2 ${
                hoveredItem === item.id 
                  ? 'border-slate-300' 
                  : 'border-white/40'
              } rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 relative`}>
                
                {/* Premium Background Elements */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
                <div className="absolute top-0 right-0 w-24 h-24 translate-x-12 -translate-y-12 rounded-full sm:w-32 sm:h-32 sm:translate-x-16 sm:-translate-y-16 bg-gradient-to-bl from-white/30 to-transparent" />
                
                {/* Badges */}
                <div className="absolute z-20 flex flex-col gap-1.5 sm:gap-2 top-3 sm:top-4 left-3 sm:left-4">
                  <motion.div
                    className={`px-2 sm:px-3 py-1 text-xs font-bold text-white shadow-md sm:shadow-lg rounded-lg sm:rounded-full bg-gradient-to-r ${item.gradient}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.discount}
                  </motion.div>
                  {item.isNew && (
                    <span className="px-2 py-1 text-xs font-bold text-white rounded-lg shadow-md sm:px-3 sm:rounded-full sm:shadow-lg bg-emerald-500">
                      NEW
                    </span>
                  )}
                  {item.isBestSeller && (
                    <span className="px-2 py-1 text-xs font-bold text-white bg-yellow-500 rounded-lg shadow-md sm:px-3 sm:rounded-full sm:shadow-lg">
                      BESTSELLER
                    </span>
                  )}
                </div>

                {/* Floating Action Buttons */}
                <div className="absolute z-20 flex flex-col gap-1.5 sm:gap-2 top-3 sm:top-4 right-3 sm:right-4">
                  <motion.button
                    className="flex items-center justify-center w-8 h-8 transition-all border rounded-full shadow-md opacity-0 sm:w-10 sm:h-10 sm:shadow-lg bg-white/90 backdrop-blur-sm border-white/40 group-hover:opacity-100"
                    whileHover={{ scale: 1.1 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to wishlist logic
                    }}
                  >
                    <HiHeart className="text-sm text-slate-600 sm:text-base" />
                  </motion.button>
                  <motion.button
                    className="flex items-center justify-center w-8 h-8 transition-all border rounded-full shadow-md opacity-0 sm:w-10 sm:h-10 sm:shadow-lg bg-white/90 backdrop-blur-sm border-white/40 group-hover:opacity-100"
                    whileHover={{ scale: 1.1 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Quick view logic
                    }}
                  >
                    <HiEye className="text-sm text-slate-600 sm:text-base" />
                  </motion.button>
                </div>

                {/* Product Image */}
                <div className="relative z-10 p-4 pb-0 sm:p-6">
                  <motion.div
                    className="relative mb-3 sm:mb-4"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl opacity-20 scale-105 sm:scale-110`} />
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="relative z-10 object-contain w-full h-40 shadow-md sm:h-48 lg:h-56 sm:shadow-xl rounded-xl sm:rounded-2xl"
                    />
                    
                    {/* Stock Status */}
                    <div className="absolute flex items-center gap-1 px-2 py-1 rounded-lg sm:gap-2 sm:px-3 bottom-2 left-2 bg-white/90 backdrop-blur-sm">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${item.inStock ? 'bg-emerald-500' : 'bg-red-500'}`} />
                      <span className="text-xs font-medium text-slate-700">
                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Product Details */}
                <div className="relative z-10 p-4 pt-2 sm:p-6">
                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-1 mb-2 sm:gap-2 sm:mb-3">
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <HiStar
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < Math.floor(item.rating) 
                              ? 'text-yellow-500' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold sm:text-sm text-slate-700">
                      {item.rating}
                    </span>
                    <span className="text-xs text-slate-500">
                      ({item.reviews} reviews)
                    </span>
                  </div>

                  {/* Product Name & Subtitle */}
                  <h3 className="mb-1 text-lg font-bold transition-colors sm:text-xl text-slate-800 group-hover:text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mb-1 text-xs font-medium sm:mb-2 sm:text-sm text-slate-600">
                    {item.subtitle}
                  </p>
                  <p className="mb-3 text-xs sm:mb-4 text-slate-500">
                    {item.material}
                  </p>

                  {/* Features */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {item.features.slice(0, 2).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium rounded sm:rounded-full bg-slate-100 text-slate-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="text-lg font-black sm:text-xl text-slate-800">
                          {item.price}
                        </span>
                        <span className="text-xs line-through sm:text-sm text-slate-400">
                          {item.originalPrice}
                        </span>
                      </div>
                    </div>

                    <motion.button
                      className={`flex items-center gap-1 sm:gap-2 bg-gradient-to-r ${item.gradient} text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart logic
                      }}
                    >
                      <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                      Add
                    </motion.button>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="max-w-xl p-6 mx-auto border shadow-xl sm:max-w-2xl sm:p-8 sm:shadow-2xl bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border-white/20">
            <div className="flex items-center justify-center gap-2 mb-3 sm:gap-3 sm:mb-4">
              <HiLightningBolt className="text-2xl sm:text-3xl text-amber-500" />
              <h3 className="text-xl font-bold sm:text-2xl text-slate-800">
                Can't find what you're looking for?
              </h3>
            </div>
            <p className="mb-4 text-sm sm:mb-6 sm:text-base text-slate-600">
              Explore our complete collection or get personalized recommendations
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <button className="px-6 py-3 font-bold text-white transition-all shadow-md sm:px-8 sm:py-4 sm:shadow-xl bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl sm:rounded-2xl hover:shadow-lg sm:hover:shadow-2xl hover:scale-105">
                View All Products
              </button>
              <button className="px-6 py-3 font-bold transition-all bg-white border-2 shadow-md sm:px-8 sm:py-4 sm:shadow-lg border-slate-200 text-slate-800 rounded-xl sm:rounded-2xl hover:shadow-lg sm:hover:shadow-xl hover:scale-105">
                Get Recommendations
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}