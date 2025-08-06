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
            <option value="">All Categories</option>
            <option value="Glasses">Glasses</option>
            <option value="Bowls">Bowls</option>
            <option value="Bottle">Bottle</option>
            <option value="Cup">Cup</option>
          </select>
        </div>

        {/* Material Filter */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Material</label>
          <select
            onChange={(e) => onFilterChange('material', e.target.value)}
            className="w-full px-4 py-2 text-sm transition border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Materials</option>
            <option value="Steel">Steel</option>
            <option value="Glass">Glass</option>
            <option value="Thermal Steel">Thermal Steel</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CrockeryFilter;
