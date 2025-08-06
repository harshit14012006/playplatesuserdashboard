import React from 'react';
import { ArrowDownWideNarrow } from 'lucide-react';

const ToysSort = ({ onSortChange }) => {
  return (
    <div className="w-full mb-6 sm:w-64">
      <label className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
        <ArrowDownWideNarrow className="w-5 h-5 text-gray-600" />
        Sort Toys
      </label>
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="w-full px-4 py-2 text-sm text-gray-700 transition bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
