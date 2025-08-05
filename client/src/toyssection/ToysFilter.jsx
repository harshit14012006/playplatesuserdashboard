import React from 'react';

const ToysFilter = ({ onFilterChange }) => {
  return (
    <div className="p-5 space-y-4 bg-white shadow-md rounded-xl">
      <h3 className="text-xl font-semibold text-gray-800">Filter Toys</h3>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Category</label>
        <select onChange={(e) => onFilterChange('category', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">All Categories</option>
          <option value="Mythical toy">Mythical Toy</option>
          <option value="Superhero toy">Superhero Toy</option>
          <option value="Animal toy">Animal Toy</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Age Group</label>
        <select onChange={(e) => onFilterChange('ageGroup', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">All Age Groups</option>
          <option value="3-7 years">3–7 years</option>
          <option value="7-10 years">7–10 years</option>
        </select>
      </div>
    </div>
  );
};

export default ToysFilter;
