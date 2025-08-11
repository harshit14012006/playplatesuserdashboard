import React, { useState } from 'react';
import { FiShoppingCart, FiPlayCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ToysHeroSection = ({ onShopClick }) => {
  const [hovered, setHovered] = useState(false);

  // Colorful toy elements data
  const toyElements = [
    { emoji: '🚀', color: 'bg-blue-400', size: 'w-16 h-16', x: '10%', y: '20%' },
    { emoji: '🧸', color: 'bg-pink-400', size: 'w-20 h-20', x: '80%', y: '40%' },
    { emoji: '🎮', color: 'bg-purple-400', size: 'w-14 h-14', x: '30%', y: '70%' },
    { emoji: '🏎️', color: 'bg-red-400', size: 'w-18 h-18', x: '70%', y: '10%' }
  ];
 
  return (
    <section className="relative bg-white overflow-hidden mt-0 pt-0">
      {/* Colorful abstract shapes in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full filter blur-[100px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-[100px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 bg-yellow-100 rounded-full"
            >
              <span className="text-sm font-medium text-yellow-800">🎉 New Arrivals</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Discover <span className="text-blue-500">Playful</span> <br />
              <span className="text-pink-500">Learning</span> Adventures
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-10 max-w-lg"
            >
              Curated collection of educational toys that spark creativity and joy in children of all ages.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={onShopClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <span className="relative z-10 flex items-center">
                  <FiShoppingCart className="mr-2" />
                  Shop Collection
                </span>
                <motion.span
                  initial={false}
                  animate={{
                    x: hovered ? '100%' : '-100%',
                    opacity: hovered ? 1 : 0
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 z-0"
                />
              </motion.button>

             
            </motion.div>

            {/* Small floating toys at bottom of text section */}
            <div className="mt-12 flex gap-3">
              {['🦖', '🧩', '🎨'].map((toy, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="text-3xl cursor-pointer hover:scale-110 transition-transform"
                >
                  {toy}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Colorful toy showcase */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Main card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute inset-0 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-pink-50 opacity-60"></div>
              <div className="relative z-10 text-center p-8">
                <span className="text-8xl">🎯</span>
                <p className="mt-6 text-xl font-medium text-gray-800">Featured Toys</p>
              </div>
            </motion.div>

            {/* Floating toy elements */}
            {toyElements.map((toy, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                className={`absolute ${toy.size} ${toy.color} rounded-xl flex items-center justify-center shadow-lg cursor-pointer`}
                style={{
                  left: toy.x,
                  top: toy.y
                }}
              >
                <span className="text-3xl">{toy.emoji}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative dots pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <div className="flex justify-center gap-8 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-pink-400"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToysHeroSection;