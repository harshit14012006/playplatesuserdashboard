import React from 'react';

const CrockerySearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search toys by name..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full px-4 py-2 mb-6 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default CrockerySearchBar;
