import React from 'react';

const CrockeryFilter = ({ onFilterChange }) => {
  return (
    <div className="p-5 space-y-4 bg-white shadow-md rounded-xl">
      <h3 className="text-xl font-semibold text-gray-800">Filter Crockery</h3>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Category</label>
        <select onChange={(e) => onFilterChange('category', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
          <option value="">All Categories</option>
          <option value="Glasses">Glasses</option>
          <option value="Bowls">Bowls</option>
          <option value="Bottle">Bottle</option>
          <option value="Cup">Cup</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Material</label>
        <select onChange={(e) => onFilterChange('material', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
          <option value="">All Materials</option>
          <option value="Steel">Steel</option>
          <option value="Glass">Glass</option>
          <option value="Thermal Steel">Thermal Steel</option>
        </select>
      </div>
    </div>
  );
};

export default CrockeryFilter;
