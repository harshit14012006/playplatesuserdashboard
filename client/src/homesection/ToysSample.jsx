import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  HiHeart, 
  HiEye, 
  HiStar, 
  HiSparkles,
  HiGift,
  HiShieldCheck
} from 'react-icons/hi';
import { FaSearch, FaBaby, FaChild } from 'react-icons/fa';

export default function ToysSample() {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Professional color palette
  const professionalColors = {
    primary: '#1e293b', // slate-800
    secondary: '#334155', // slate-700
    accent: '#10b981', // emerald-500
    pink: '#ec4899', // pink-500
    purple: '#8b5cf6' // violet-500
  };

  // Enhanced toys data with professional details
  const toyItems = [
    {
      id: "1",
      name: "Wooden Train Set",
      subtitle: "Educational STEM Learning",
      material: "Premium Hardwood",
      price: "₹999",
      originalPrice: "₹1,299",
      discount: "23% OFF",
      rating: 4.9,
      reviews: 342,
      inStock: true,
      isNew: false,
      isBestSeller: true,
      ageGroup: "3-8 years",
      features: ["STEM Learning", "Hand Crafted", "Non-Toxic Paint"],
      category: "educational",
      safetyRating: "A+",
      image: "https://images-cdn.ubuy.co.in/65a201ee20727069ca69aa1c-battery-operated-train-set-wooden.jpg",
      description: "Spark creativity with this beautifully crafted wooden train set, designed to enhance STEM learning. Made from premium hardwood with non-toxic paint, it’s perfect for children aged 3-8 to develop motor skills and problem-solving abilities.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      benefits: ["Motor Skills", "Problem Solving", "Creativity"]
    },
    {
      id: "2",
      name: "Plush Teddy Bear",
      subtitle: "Comfort & Cuddle Companion",
      material: "Organic Cotton",
      price: "₹349",
      originalPrice: "₹499",
      discount: "30% OFF",
      rating: 4.8,
      reviews: 278,
      inStock: true,
      isNew: true,
      isBestSeller: false,
      ageGroup: "0-5 years",
      features: ["Hypoallergenic", "Machine Washable", "Super Soft"],
      category: "comfort",
      safetyRating: "A+",
      image: "https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVkZHklMjBiZWFyfGVufDB8fDB8fHww",
      description: "This plush teddy bear, made from organic cotton, is the perfect cuddle companion for infants and toddlers. Hypoallergenic and machine washable, it provides comfort and security for children aged 0-5 years.",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      benefits: ["Emotional Support", "Better Sleep", "Security"]
    },
    {
      id: "3",
      name: "Building Blocks Set",
      subtitle: "Creative Construction Kit",
      material: "BPA-Free Plastic",
      price: "₹749",
      originalPrice: "₹999",
      discount: "25% OFF",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      isNew: false,
      isBestSeller: true,
      ageGroup: "4-12 years",
      features: ["300+ Pieces", "Compatible Design", "Storage Box"],
      category: "building",
      safetyRating: "A",
      image: "https://www.kaarr.in/cdn/shop/files/rn-image_picker_lib_temp_0213f552-5c23-4507-8807-28cac364db96.jpg?v=1748787718",
      description: "Unleash creativity with this building blocks set, featuring over 300 BPA-free plastic pieces. Ideal for children aged 4-12, it promotes spatial thinking and engineering skills with a convenient storage box.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      benefits: ["Spatial Thinking", "Engineering Skills", "Patience"]
    },
    {
      id: "4",
      name: "Remote Control Car",
      subtitle: "High-Speed Racing Experience",
      material: "Durable ABS Plastic",
      price: "₹1,499",
      originalPrice: "₹1,999",
      discount: "25% OFF",
      rating: 4.6,
      reviews: 189,
      inStock: true,
      isNew: true,
      isBestSeller: false,
      ageGroup: "6-14 years",
      features: ["2.4GHz Remote", "LED Lights", "Rechargeable"],
      category: "electronic",
      safetyRating: "A",
      image: "https://m.media-amazon.com/images/I/5101j6bF+0L._SY300_SX300_.jpg",
      description: "Experience thrilling races with this high-speed remote control car, made from durable ABS plastic. With a 2.4GHz remote and LED lights, it’s perfect for kids aged 6-14 to enhance hand-eye coordination.",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      benefits: ["Hand-Eye Coordination", "Focus", "Outdoor Play"]
    }
  ];

  // Filter and sort functionality
  const filteredAndSortedItems = useMemo(() => {
    let filtered = toyItems;
    
    if (selectedAgeGroup !== 'all') {
      filtered = toyItems.filter(item => {
        const ageRange = item.ageGroup.split('-')[0];
        const ageNumber = parseInt(ageRange);
        
        switch (selectedAgeGroup) {
          case 'infant': return ageNumber <= 2;
          case 'toddler': return ageNumber >= 2 && ageNumber <= 5;
          case 'child': return ageNumber >= 6 && ageNumber <= 12;
          case 'teen': return ageNumber >= 13;
          default: return true;
        }
      });
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
  }, [selectedAgeGroup, sortBy]);

  const handleCardClick = (item) => {
    navigate(`/toy-details/${item.id}`, { state: { item: { ...item, imageUrl: item.image } } });
  };

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
    <section className="relative px-6 py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-pink-50/30 to-purple-50/30">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(15,23,42,0.03)_1px,transparent_0)] bg-[length:24px_24px]" />
        
        {/* Playful floating elements */}
        <motion.div
          className="absolute rounded-full top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/8 to-purple-500/8 blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute rounded-full bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-emerald-500/8 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 22, repeat: Infinity }}
        />

        {/* Floating toy-themed shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-pink-400/20 to-purple-400/20"
            animate={{
              x: [0, Math.random() * 100, 0],
              y: [0, Math.random() * 100, 0],
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-8xl">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center w-12 h-12 shadow-xl bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl">
              <HiGift className="text-2xl text-white" />
            </div>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
          </motion.div>
          
          <motion.h2
            className="mb-6 text-5xl font-black leading-tight lg:text-6xl text-slate-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Premium Toys
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Collection
            </span>
          </motion.h2>
          
          <motion.p
            className="max-w-3xl mx-auto mb-8 text-xl font-light leading-relaxed text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover our carefully curated collection of educational and fun toys designed to inspire creativity, learning, and endless joy
          </motion.p>

          {/* Enhanced Controls */}
          <motion.div
            className="flex flex-col items-center justify-center gap-6 lg:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Age Group Filter */}
            <div className="flex items-center gap-2 p-2 border shadow-lg bg-white/80 backdrop-blur-xl rounded-2xl border-slate-200/50">
              {[
                { value: 'all', label: 'All Ages', icon: HiSparkles },
                { value: 'infant', label: '0-2 Years', icon: FaBaby },
                { value: 'toddler', label: '3-5 Years', icon: FaChild },
                { value: 'child', label: '6-12 Years', icon: HiStar },
                { value: 'teen', label: '13+ Years', icon: HiGift }
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedAgeGroup(filter.value)}
                  className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                    selectedAgeGroup === filter.value
                      ? 'bg-slate-800 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <filter.icon className="w-4 h-4" />
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Sort & Search */}
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 text-sm font-medium border bg-white/80 backdrop-blur-xl border-slate-200/50 rounded-xl text-slate-700 focus:ring-2 focus:ring-pink-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
              
              <button className="p-3 transition-all border shadow-md bg-white/80 backdrop-blur-xl border-slate-200/50 text-slate-600 rounded-xl hover:shadow-lg">
                <FaSearch className="text-sm" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Toy Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4"
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
              onClick={() => handleCardClick(item)}
              className="relative cursor-pointer group"
            >
              <div className={`bg-gradient-to-br ${item.bgGradient} backdrop-blur-xl border-2 ${
                hoveredItem === item.id 
                  ? 'border-slate-300' 
                  : 'border-white/40'
              } rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 relative`}>
                
                {/* Premium Background Elements */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
                <div className="absolute top-0 right-0 w-32 h-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-bl from-white/30 to-transparent" />
                
                {/* Enhanced Badges */}
                <div className="absolute z-20 flex flex-col gap-2 top-4 left-4">
                  <motion.div
                    className={`px-3 py-1 text-xs font-bold text-white shadow-lg rounded-full bg-gradient-to-r ${item.gradient}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.discount}
                  </motion.div>
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
                  <span className={`px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg ${
                    item.safetyRating === 'A+' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    Safety: {item.safetyRating}
                  </span>
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
                      // Quick view logic (can be implemented later)
                    }}
                  >
                    <HiEye className="text-slate-600" />
                  </motion.button>
                </div>

                {/* Product Image */}
                <div className="relative z-10 p-6 pb-0">
                  <motion.div
                    className="relative mb-4"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-2xl opacity-20 scale-110`} />
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="relative z-10 object-cover w-full h-48 shadow-xl rounded-2xl"
                    />
                    
                    {/* Age Group Badge */}
                    <div className="absolute flex items-center gap-2 px-3 py-1 rounded-lg bottom-2 left-2 bg-white/90 backdrop-blur-sm">
                      <HiShieldCheck className="w-3 h-3 text-emerald-500" />
                      <span className="text-xs font-medium text-slate-700">
                        Ages {item.ageGroup}
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
                  <h3 className="mb-1 text-xl font-bold transition-colors text-slate-800 group-hover:text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-slate-600">
                    {item.subtitle}
                  </p>
                  <p className="mb-4 text-sm text-slate-500">
                    {item.material}
                  </p>

                  {/* Educational Benefits */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-xs font-bold tracking-wide uppercase text-slate-700">
                      Learning Benefits
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {item.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className={`px-2 py-1 text-xs font-medium bg-gradient-to-r ${item.gradient} text-white rounded-full`}
                        >
                          {benefit}
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
                        <span className="text-sm line-through text-slate-400">
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
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="max-w-2xl p-8 mx-auto border shadow-2xl bg-white/80 backdrop-blur-xl rounded-3xl border-white/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HiGift className="text-3xl text-pink-500" />
              <h3 className="text-2xl font-bold text-slate-800">
                Looking for the perfect gift?
              </h3>
            </div>
            <p className="mb-6 text-slate-600">
              Get personalized toy recommendations based on age, interests, and developmental needs
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="px-8 py-4 font-bold text-white transition-all shadow-xl bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl hover:shadow-2xl hover:scale-105">
                Gift Finder
              </button>
              <button className="px-8 py-4 font-bold transition-all bg-white border-2 shadow-lg border-slate-200 text-slate-800 rounded-2xl hover:shadow-xl hover:scale-105">
                View All Toys
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}