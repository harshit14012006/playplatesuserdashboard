import React, { useState } from 'react';
import { Filter, Menu, X } from 'lucide-react';

const CrockeryFilter = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Header for mobile */}
      <div className="flex items-center justify-between mb-4 md:hidden">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-800">Filter</h3>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-700 border border-gray-300 rounded-md"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Filter Panel - always visible on md+ screens, togglable on mobile */}
      <div
        className={`p-6 space-y-5 bg-white border border-gray-200 shadow-lg rounded-2xl transition-all duration-300 ease-in-out
        ${isOpen ? 'block' : 'hidden'} md:block`}
      >
        <div className="items-center hidden gap-2 mb-2 md:flex">
          <Filter className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-800">Filter Crockery</h3>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Category</label>
          <select
            onChange={(e) => onFilterChange('category', e.target.value)}
            className="w-full px-4 py-2 text-sm transition border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select category</option>
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
        </div>

        {/* Material Filter */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Material</label>
          <select
            onChange={(e) => onFilterChange('material', e.target.value)}
            className="w-full px-4 py-2 text-sm transition border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select material</option>
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
        </div>
      </div>
    </div>
  );
};

export default CrockeryFilter;
