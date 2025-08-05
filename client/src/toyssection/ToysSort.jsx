import React from 'react';

const ToysSort = ({ onSortChange }) => {
  return (
    <div className="mb-6">
      <label className="block mb-1 text-sm font-medium text-gray-700">Sort by</label>
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Sorting</option>
        <option value="name-asc">Name: A → Z</option>
        <option value="name-desc">Name: Z → A</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default ToysSort;
