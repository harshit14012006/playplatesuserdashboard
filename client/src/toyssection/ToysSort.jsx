import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownWideNarrow } from 'lucide-react';

const ToysSort = ({ onSortChange }) => {
  // Animation variants
  const sortVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={sortVariants}
      initial="hidden"
      animate="visible"
      className="w-full mb-6 sm:w-64"
    >
      <label className="flex items-center gap-2 mb-2 text-sm font-medium text-slate-700">
        <ArrowDownWideNarrow className="w-5 h-5 text-emerald-500" />
        Sort Toys
      </label>
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="w-full px-4 py-2.5 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all hover:bg-white/90"
        aria-label="Sort toys"
      >
        <option value="featured">Featured</option>
        <option value="name-asc">Name: A → Z</option>
        <option value="name-desc">Name: Z → A</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Rating: High to Low</option>
        <option value="newest">Newest First</option>
      </select>
    </motion.div>
  );
};

export default ToysSort;