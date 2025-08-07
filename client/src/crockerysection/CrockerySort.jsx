import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownWideNarrow, RefreshCw } from 'lucide-react';

const CrockerySort = ({ onSortChange }) => {
  const [selectedSort, setSelectedSort] = useState('');

  const sortVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const handleReset = () => {
    setSelectedSort('');
    onSortChange('');
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
        Sort Crockery
      </label>
      <select
        value={selectedSort}
        onChange={(e) => {
          setSelectedSort(e.target.value);
          onSortChange(e.target.value);
        }}
        className="w-full px-4 py-2.5 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all hover:bg-white/90"
        aria-label="Sort crockery"
      >
        <option value="">Select Sorting</option>
        <option value="name-asc">Name: A → Z</option>
        <option value="name-desc">Name: Z → A</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>

      <button
        onClick={handleReset}
        disabled={!selectedSort}
        className="flex items-center justify-center w-full px-4 py-2 mt-3 text-sm font-medium text-white transition-all duration-200 shadow-lg bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl hover:from-amber-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Reset sort"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Reset Sort
      </button>
    </motion.div>
  );
};

export default CrockerySort;
