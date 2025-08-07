import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  HiHeart, 
  HiEye, 
  HiStar, 
  HiSparkles,
  HiTrendingUp,
  HiShieldCheck,
  HiLightningBolt
} from 'react-icons/hi';
import { FaFilter, FaSearch, FaSort } from 'react-icons/fa';

export default function CrockerySample() {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

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
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTn0wjJwBSiAemWthfihyJz5QEBt7vlmCgH1D4ha9kZ0NhVeVUVJPZl7DzKHcvUaAWL1lPZeHuuZPDS8m28zISZNcKiRCORPOPMYpEQlkhf",
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
    <section className="px-6 py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 relative">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(15,23,42,0.03)_1px,transparent_0)] bg-[length:24px_24px]" />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-500/8 to-orange-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-slate-800 to-slate-600 rounded-2xl flex items-center justify-center shadow-xl">
              <HiSparkles className="text-white text-2xl" />
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
          </motion.div>
          
          <motion.h2
            className="text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight"
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
            className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover our curated selection of premium crockery designed for elegance, durability, and exceptional dining experiences
          </motion.p>

          {/* Enhanced Controls */}
          <motion.div
            className="flex flex-col lg:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xl rounded-2xl p-2 border border-slate-200/50 shadow-lg">
              {[
                { value: 'all', label: 'All Items' },
                { value: 'dinnerware', label: 'Dinnerware' },
                { value: 'drinkware', label: 'Drinkware' },
                { value: 'serveware', label: 'Serveware' }
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
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
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-xl text-sm font-medium text-slate-700 focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
              
              <button className="p-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 text-slate-600 rounded-xl shadow-md hover:shadow-lg transition-all">
                <FaSearch className="text-sm" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {filteredAndSortedItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 }
              }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              onClick={() => navigate(`/crockery-details/${item.id}`, { state: { item } })}
              className="group relative cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${item.bgGradient} backdrop-blur-xl border-2 ${
                hoveredItem === item.id 
                  ? 'border-slate-300' 
                  : 'border-white/40'
              } rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 relative`}>
                
                {/* Premium Background Elements */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/30 to-transparent rounded-full -translate-y-16 translate-x-16" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  <motion.div
                    className={`px-3 py-1 text-xs font-bold text-white shadow-lg rounded-full bg-gradient-to-r ${item.gradient}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.discount}
                  </motion.div>
                  {item.isNew && (
                    <span className="px-3 py-1 text-xs font-bold bg-emerald-500 text-white rounded-full shadow-lg">
                      NEW
                    </span>
                  )}
                  {item.isBestSeller && (
                    <span className="px-3 py-1 text-xs font-bold bg-yellow-500 text-white rounded-full shadow-lg">
                      BESTSELLER
                    </span>
                  )}
                </div>

                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                  <motion.button
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all"
                    whileHover={{ scale: 1.1 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to wishlist logic
                    }}
                  >
                    <HiHeart className="text-slate-600" />
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all"
                    whileHover={{ scale: 1.1 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Quick view logic
                    }}
                  >
                    <HiEye className="text-slate-600" />
                  </motion.button>
                </div>

                {/* Product Image */}
                <div className="relative z-10 p-6 pb-0">
                  <motion.div
                    className="relative mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-2xl opacity-20 scale-110`} />
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="relative z-10 w-full h-48 object-cover rounded-2xl shadow-xl"
                    />
                    
                    {/* Stock Status */}
                    <div className="absolute bottom-2 left-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${item.inStock ? 'bg-emerald-500' : 'bg-red-500'}`} />
                      <span className="text-xs font-medium text-slate-700">
                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Product Details */}
                <div className="relative z-10 p-6 pt-2">
                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <HiStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(item.rating) 
                              ? 'text-yellow-500' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {item.rating}
                    </span>
                    <span className="text-xs text-slate-500">
                      ({item.reviews} reviews)
                    </span>
                  </div>

                  {/* Product Name & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-slate-500 mb-4">
                    {item.material}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {item.features.slice(0, 2).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black text-slate-800">
                          {item.price}
                        </span>
                        <span className="text-sm text-slate-400 line-through">
                          {item.originalPrice}
                        </span>
                      </div>
                    </div>

                    <motion.button
                      className={`flex items-center gap-2 bg-gradient-to-r ${item.gradient} text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart logic
                      }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HiLightningBolt className="text-3xl text-amber-500" />
              <h3 className="text-2xl font-bold text-slate-800">
                Can't find what you're looking for?
              </h3>
            </div>
            <p className="text-slate-600 mb-6">
              Explore our complete collection or get personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                View All Products
              </button>
              <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Get Recommendations
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
