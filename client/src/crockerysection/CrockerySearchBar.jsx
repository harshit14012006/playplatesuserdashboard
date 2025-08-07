import React from 'react';
import { motion } from 'framer-motion';
import { HiSearch } from 'react-icons/hi';

const CrockerySearchBar = ({ onSearch }) => {
  const inputVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={inputVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-lg mx-auto mb-6"
    >
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <HiSearch className="w-5 h-5 text-slate-500" aria-hidden="true" />
      </div>
      <input
        type="text"
        placeholder="Search crockery by name..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all hover:bg-white/90"
        aria-label="Search crockery by name"
        role="searchbox"
      />
    </motion.div>
  );
};

export default CrockerySearchBar;
