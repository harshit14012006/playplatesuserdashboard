import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Menu, X, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { HiSparkles, HiCube } from 'react-icons/hi';

const CrockeryFilter = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isMaterialOpen, setIsMaterialOpen] = useState(true);

  const handleReset = () => {
    setSelectedCategory('');
    setSelectedMaterial('');
    onFilterChange('category', '');
    onFilterChange('material', '');
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
          <Filter className="w-5 h-5 transition-transform duration-200 text-amber-500 hover:scale-110" />
          <h3 className="text-lg font-bold text-slate-800 md:text-xl">Filter Crockery</h3>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white transition-all duration-200 rounded-lg shadow-md bg-gradient-to-r from-amber-500 to-orange-600 md:hidden hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
            className="flex items-center justify-between w-full py-3 text-sm font-medium rounded-md text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Toggle category filter"
            aria-expanded={isCategoryOpen}
          >
            <div className="flex items-center gap-2">
              <HiSparkles className="w-4 h-4 text-amber-500" />
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
              className="w-full px-4 py-2.5 mt-2 text-sm font-medium text-slate-700 bg-white/90 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all hover:bg-white/95"
              aria-label="Select crockery category"
            >
              <option value="">All Categories</option>
              <option value="Plates">Plates</option>
              <option value="Bowls">Bowls</option>
              <option value="Cups">Cups</option>
              <option value="Mugs">Mugs</option>
              <option value="Glasses">Glasses</option>
              <option value="Cutlery">Cutlery</option>
              <option value="Serving Dishes">Serving Dishes</option>
              <option value="Trays">Trays</option>
              <option value="Jugs & Pitchers">Jugs & Pitchers</option>
              <option value="Tea Sets">Tea Sets</option>
              <option value="Dinner Sets">Dinner Sets</option>
              <option value="Tureens">Tureens</option>
              <option value="Condiment Sets">Condiment Sets</option>
              <option value="Soup Bowls">Soup Bowls</option>
              <option value="Side Plates">Side Plates</option>
              <option value="Salad Bowls">Salad Bowls</option>
              <option value="Saucers">Saucers</option>
            </select>
          </motion.div>
        </div>

        {/* Material Filter - Accordion */}
        <div className="border-b border-slate-200/50">
          <button
            onClick={() => setIsMaterialOpen(!isMaterialOpen)}
            className="flex items-center justify-between w-full py-3 text-sm font-medium rounded-md text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Toggle material filter"
            aria-expanded={isMaterialOpen}
          >
            <div className="flex items-center gap-2">
              <HiCube className="w-4 h-4 text-amber-500" />
              <span>Material</span>
            </div>
            {isCategoryOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          <motion.div
            variants={accordionVariants}
            animate={isMaterialOpen ? 'open' : 'closed'}
            className="overflow-hidden"
          >
            <select
              value={selectedMaterial}
              onChange={(e) => {
                setSelectedMaterial(e.target.value);
                onFilterChange('material', e.target.value);
              }}
              className="w-full px-4 py-2.5 mt-2 text-sm font-medium text-slate-700 bg-white/90 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all hover:bg-white/95"
              aria-label="Select crockery material"
            >
              <option value="">All Materials</option>
              <option value="Ceramic">Ceramic</option>
              <option value="Porcelain">Porcelain</option>
              <option value="Bone China">Bone China</option>
              <option value="Melamine">Melamine</option>
              <option value="Glass">Glass</option>
              <option value="Tempered Glass">Tempered Glass</option>
              <option value="Steel">Stainless Steel</option>
              <option value="Plastic">Plastic</option>
              <option value="Bamboo">Bamboo</option>
              <option value="Wood">Wood</option>
              <option value="Copper">Copper</option>
              <option value="Clay/Terracotta">Clay / Terracotta</option>
              <option value="Stoneware">Stoneware</option>
            </select>
          </motion.div>
        </div>

        {/* Reset Button */}
        <motion.button
          onClick={handleReset}
          className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl shadow-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selectedCategory && !selectedMaterial}
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

export default CrockeryFilter;