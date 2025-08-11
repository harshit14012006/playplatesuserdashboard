import React, { useState } from 'react';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CrockeryHeroSection = ({ onShopClick }) => {
  const [hovered, setHovered] = useState(false);

  // Crockery elements data
  const crockeryElements = [
    { icon: '🍽️', color: 'bg-blue-100', size: 'w-16 h-16', x: '10%', y: '20%' },
    { icon: '☕', color: 'bg-amber-100', size: 'w-20 h-20', x: '80%', y: '40%' },
    { icon: '🍶', color: 'bg-gray-100', size: 'w-14 h-14', x: '30%', y: '70%' },
    { icon: '🥣', color: 'bg-white', size: 'w-18 h-18', x: '70%', y: '10%' }
  ];

  return (
    <section className="relative bg-white overflow-hidden mt-0 pt-0">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full filter blur-[100px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full filter blur-[100px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 bg-amber-100 rounded-full"
            >
              <span className="text-sm font-medium text-amber-800">✨ Premium Collection</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Elevate Your <span className="text-blue-600">Dining</span> <br />
              <span className="text-amber-500">Experience</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-10 max-w-lg"
            >
              Handcrafted tableware that combines elegance with everyday functionality for memorable meals.
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
                className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
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
                  className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 z-0"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium py-3 px-6 rounded-lg border border-gray-200 hover:border-blue-300 bg-white transition-all"
              >
                <FiSearch className="text-blue-500" />
                Browse Sets
              </motion.button>
            </motion.div>

            {/* Small floating crockery icons */}
            <div className="mt-12 flex gap-3">
              {['🍴', '🍷', '🍽️'].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="text-3xl cursor-pointer hover:scale-110 transition-transform"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Crockery showcase */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Main card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute inset-0 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-amber-50 opacity-60"></div>
              <div className="relative z-10 text-center p-8">
                <span className="text-8xl">🍽️</span>
                <p className="mt-6 text-xl font-medium text-gray-800">Featured Tableware</p>
              </div>
            </motion.div>

            {/* Floating crockery elements */}
            {crockeryElements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                className={`absolute ${item.size} ${item.color} rounded-xl flex items-center justify-center shadow-lg cursor-pointer border border-gray-100`}
                style={{
                  left: item.x,
                  top: item.y
                }}
              >
                <span className="text-3xl">{item.icon}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <div className="flex justify-center gap-8 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-blue-400"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrockeryHeroSection;