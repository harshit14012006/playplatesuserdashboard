import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';

export default function HomeCta() {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative px-4 py-16 overflow-hidden text-center sm:px-6 lg:px-8 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/30">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(15,23,42,0.03)_1px,transparent_0)] bg-[length:16px_16px] sm:bg-[length:20px_20px] lg:bg-[length:24px_24px]" />
        <motion.div
          className="absolute w-48 h-48 rounded-full top-10 sm:top-16 left-5 sm:left-10 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-2xl sm:blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-56 h-56 rounded-full bottom-10 sm:bottom-16 right-5 sm:right-10 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-2xl sm:blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Icon and Line */}
        <motion.div
          className="inline-flex items-center gap-2 mb-4 sm:gap-3 sm:mb-6"
          variants={childVariants}
        >
          <div className="flex items-center justify-center w-10 h-10 shadow-xl sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl">
            <HiSparkles className="text-xl text-white sm:text-2xl" />
          </div>
          <div className="w-12 h-1 rounded-full sm:w-16 bg-gradient-to-r from-blue-500 to-indigo-500" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="mb-4 text-3xl font-black leading-tight sm:mb-6 sm:text-4xl lg:text-5xl text-slate-800"
          variants={childVariants}
        >
          Discover Your Perfect Collection
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Today
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="max-w-xl mx-auto mb-6 text-base font-light leading-relaxed sm:max-w-2xl lg:max-w-3xl sm:mb-8 sm:text-lg lg:text-xl text-slate-600"
          variants={childVariants}
        >
          Explore our curated range of premium products designed to bring joy, elegance, and functionality to your home.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
          variants={childVariants}
        >
          <motion.button
            className="px-6 py-3 font-bold text-white transition-all shadow-md sm:px-8 sm:py-4 sm:shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl hover:shadow-lg sm:hover:shadow-2xl hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
          <motion.button
            className="px-6 py-3 font-bold transition-all bg-white border-2 shadow-md sm:px-8 sm:py-4 sm:shadow-lg border-slate-200 text-slate-800 rounded-xl sm:rounded-2xl hover:shadow-lg sm:hover:shadow-xl hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}