import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Menu, X, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { HiSparkles, HiUserGroup } from 'react-icons/hi';

const ToysFilter = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isAgeGroupOpen, setIsAgeGroupOpen] = useState(true);

  const handleReset = () => {
    setSelectedCategory('');
    setSelectedAgeGroup('');
    onFilterChange('category', '');
    onFilterChange('ageGroup', '');
  };

  // Animation variants
  const panelVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const accordionVariants = {
    open: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full max-w-md mx-auto font-sans">
      {/* Sticky Header for mobile */}
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white/80 backdrop-blur-md md:p-0 md:static md:bg-transparent">
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-pink-500 transition-transform duration-200 hover:scale-110" />
          <h3 className="text-lg font-bold text-slate-800 md:text-xl">Filter Toys</h3>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white transition-all duration-200 rounded-lg shadow-md bg-gradient-to-r from-pink-500 to-purple-600 md:hidden hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label={isOpen ? 'Close filter menu' : 'Open filter menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Filter Panel */}
      <motion.div
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        className={`mt-4 p-6 space-y-6 bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl transition-all duration-500 ease-in-out
          ${isOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-4'} md:block md:opacity-100 md:translate-y-0 md:mt-0`}
      >
        {/* Category Filter - Accordion */}
        <div className="border-b border-slate-200/50">
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="flex items-center justify-between w-full py-3 text-sm font-medium rounded-md text-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Toggle category filter"
            aria-expanded={isCategoryOpen}
          >
            <div className="flex items-center gap-2">
              <HiSparkles className="w-4 h-4 text-emerald-500" />
              <span>Category</span>
            </div>
            {isCategoryOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          <motion.div
            variants={accordionVariants}
            animate={isCategoryOpen ? 'open' : 'closed'}
            className="overflow-hidden"
          >
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                onFilterChange('category', e.target.value);
              }}
              className="w-full px-4 py-2.5 mt-2 text-sm font-medium text-slate-700 bg-white/90 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all hover:bg-white/95"
              aria-label="Select toy category"
            >
              <option value="">All Categories</option>
              {[
                'Soft Toys',
                'Educational',
                'Action Figures',
                'Puzzles',
                'Outdoor',
                'Vehicles & Remote Control',
                'Building Blocks',
                'Musical Toys',
                'Arts & Crafts',
                'Board Games',
                'Dolls & Dollhouses',
                'Role Play & Pretend Play',
                'STEM Toys',
                'Electronic Toys',
                'Bath Toys',
                'Sports & Outdoor Games',
                'Plush Toys',
                'Infant Toys',
                'Science Kits',
                'Construction Toys',
                'Magic Sets',
                'Learning Tablets',
                'Wooden Toys',
                'Toy Guns & Blasters',
                'Die-Cast & Collectibles',
              ].map((category) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </motion.div>
        </div>

        {/* Age Group Filter - Accordion */}
        <div className="border-b border-slate-200/50">
          <button
            onClick={() => setIsAgeGroupOpen(!isAgeGroupOpen)}
            className="flex items-center justify-between w-full py-3 text-sm font-medium rounded-md text-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Toggle age group filter"
            aria-expanded={isAgeGroupOpen}
          >
            <div className="flex items-center gap-2">
              <HiUserGroup className="w-4 h-4 text-emerald-500" />
              <span>Age Group</span>
            </div>
            {isAgeGroupOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          <motion.div
            variants={accordionVariants}
            animate={isAgeGroupOpen ? 'open' : 'closed'}
            className="overflow-hidden"
          >
            <select
              value={selectedAgeGroup}
              onChange={(e) => {
                setSelectedAgeGroup(e.target.value);
                onFilterChange('ageGroup', e.target.value);
              }}
              className="w-full px-4 py-2.5 mt-2 text-sm font-medium text-slate-700 bg-white/90 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all hover:bg-white/95"
              aria-label="Select age group"
            >
              <option value="">All Age Groups</option>
              {[
                '0-6 months',
                '6-12 months',
                '1-2 years',
                '2-3 years',
                '3-5 years',
                '5-7 years',
                '6-8 years',
                '8-10 years',
                '10-12 years',
                '12+ years',
                'Teens & Adults',
              ].map((ageGroup) => (
                <option key={ageGroup} value={ageGroup}>
                  {ageGroup}
                </option>
              ))}
            </select>
          </motion.div>
        </div>

        {/* Reset Button */}
        <motion.button
          onClick={handleReset}
          className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl shadow-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selectedCategory && !selectedAgeGroup}
          aria-label="Reset filters"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset Filters
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ToysFilter;