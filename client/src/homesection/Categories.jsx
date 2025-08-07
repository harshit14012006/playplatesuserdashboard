import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiSparkles, 
  HiArrowRight, 
  HiStar,
  HiHeart,
  HiShoppingBag,
  HiTrendingUp
} from 'react-icons/hi';
import { FaSearch, FaFilter, FaEye } from 'react-icons/fa';
import toyImg from '../assets/toy.png';
import crockeryImg from '../assets/crockery.png';

export default function Categories() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  // Professional color palette matching the dashboard
  const professionalColors = {
    primary: {
      navy: '#1e293b',
      slate: '#334155',
      blue: '#3b82f6',
      indigo: '#6366f1'
    },
    accent: {
      emerald: '#10b981',
      amber: '#f59e0b',
      rose: '#f43f5e',
      violet: '#8b5cf6'
    }
  };

  // Enhanced category data with professional metrics
  const categoriesData = [
    {
      id: 1,
      title: "Premium Toys",
      subtitle: "Educational & Creative",
      description: "Curated collection of premium toys designed to inspire creativity, learning, and cognitive development for children of all ages.",
      image: toyImg,
      stats: {
        products: "2,847",
        rating: "4.9",
        growth: "+24.5%"
      },
      features: ["Educational Focus", "Safety Certified", "Age Appropriate"],
      gradient: "from-violet-500 via-purple-600 to-pink-600",
      bgGradient: "from-violet-50 via-purple-50 to-pink-50",
      borderGradient: "from-violet-200 to-pink-200",
      tags: ["Trending", "Best Sellers"],
      color: professionalColors.accent.violet
    },
    {
      id: 2,
      title: "Luxury Crockery",
      subtitle: "Elegant Dining Solutions",
      description: "Sophisticated crockery collections combining timeless elegance with modern functionality for exceptional dining experiences.",
      image: crockeryImg,
      stats: {
        products: "1,293",
        rating: "4.8",
        growth: "+18.2%"
      },
      features: ["Premium Materials", "Dishwasher Safe", "Designer Collections"],
      gradient: "from-emerald-500 via-teal-600 to-blue-600",
      bgGradient: "from-emerald-50 via-teal-50 to-blue-50",
      borderGradient: "from-emerald-200 to-blue-200",
      tags: ["Premium", "New Arrivals"],
      color: professionalColors.accent.emerald
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative px-6 py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(15,23,42,0.03)_1px,transparent_0)] bg-[length:24px_24px]" />
        
        {/* Premium floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-violet-500/8 to-purple-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        
        {/* Geometric accents */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-slate-400/20 to-blue-400/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100, 0],
              y: [0, Math.random() * 100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
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
            <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full" />
          </motion.div>
          
          <motion.h2
            className="text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Product Categories
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover our carefully curated collections designed for quality, innovation, and exceptional user experiences
          </motion.p>

          {/* Category Controls */}
          <motion.div
            className="flex justify-center items-center gap-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xl rounded-2xl p-2 border border-slate-200/50 shadow-lg">
              <button className="px-4 py-2 bg-slate-800 text-white rounded-xl font-semibold text-sm shadow-md">
                All Categories
              </button>
              <button className="px-4 py-2 text-slate-600 hover:text-slate-800 rounded-xl font-medium text-sm transition-colors">
                Trending
              </button>
              <button className="px-4 py-2 text-slate-600 hover:text-slate-800 rounded-xl font-medium text-sm transition-colors">
                New Arrivals
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 text-slate-600 rounded-xl shadow-md hover:shadow-lg transition-all">
                <FaSearch className="text-sm" />
              </button>
              <button className="p-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 text-slate-600 rounded-xl shadow-md hover:shadow-lg transition-all">
                <FaFilter className="text-sm" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {categoriesData.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              onHoverStart={() => setHoveredCard(category.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl border-2 ${
                hoveredCard === category.id 
                  ? `border-gradient-to-r ${category.borderGradient}` 
                  : 'border-white/40'
              } rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 relative`}>
                
                {/* Premium Background Elements */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/30 to-transparent rounded-full -translate-y-20 translate-x-20" />
                
                <div className="relative z-10 p-8">
                  {/* Category Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {category.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 text-xs font-bold rounded-full ${
                              tag === 'Trending' ? 'bg-red-100 text-red-800' :
                              tag === 'Best Sellers' ? 'bg-yellow-100 text-yellow-800' :
                              tag === 'Premium' ? 'bg-purple-100 text-purple-800' :
                              'bg-blue-100 text-blue-800'
                            } shadow-sm`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-3xl font-black text-slate-800 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-lg font-semibold text-slate-600 mb-4">
                        {category.subtitle}
                      </p>
                    </div>

                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-white shadow-2xl`}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiShoppingBag className="text-2xl" />
                    </motion.div>
                  </div>

                  {/* Product Image */}
                  <motion.div
                    className="relative mb-8 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-full blur-2xl opacity-20 scale-110`} />
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="relative z-10 w-40 h-40 object-contain drop-shadow-2xl"
                      />
                    </div>
                  </motion.div>

                  {/* Description */}
                  <p className="text-slate-700 text-base leading-relaxed mb-8">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {category.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * featureIndex }}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full`} />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-2xl font-black text-slate-800">{category.stats.products}</p>
                        <p className="text-xs text-slate-600 font-medium">Products</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-black text-slate-800 flex items-center gap-1">
                          {category.stats.rating}
                          <HiStar className="text-yellow-500 text-lg" />
                        </p>
                        <p className="text-xs text-slate-600 font-medium">Rating</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-black text-emerald-600 flex items-center gap-1">
                          {category.stats.growth}
                          <HiTrendingUp className="text-lg" />
                        </p>
                        <p className="text-xs text-slate-600 font-medium">Growth</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    className={`w-full py-4 bg-gradient-to-r ${category.gradient} text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all group-hover:scale-105 flex items-center justify-center gap-3`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Explore Collection</span>
                    <motion.div
                      animate={{ x: hoveredCard === category.id ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiArrowRight className="text-xl" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Floating Action Buttons */}
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  <motion.button
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <HiHeart className="text-slate-600" />
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaEye className="text-slate-600 text-sm" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-slate-600 mb-6">
            Can't find what you're looking for?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            Browse All Categories
          </button>
        </motion.div>
      </div>
    </section>
  );
}
