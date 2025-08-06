import React from 'react';

const ToysFilter = ({ onFilterChange }) => {
  return (
    <div className="p-5 space-y-4 bg-white shadow-md rounded-xl">
      <h3 className="text-xl font-semibold text-gray-800">Filter Toys</h3>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Category</label>
        <select onChange={(e) => onFilterChange('category', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">All Categories</option>
          <option value="Mythical toy">Soft Toys</option>
          <option value="Superhero toy">Educational</option>
          <option value="Animal toy">Action Figures</option>
          <option value="Mythical toy">Puzzles</option>
          <option value="Superhero toy">Outdoor</option>
          <option value="Animal toy">Vehicles & Remote Control</option>
          <option value="Mythical toy">Building Blocks</option>
          <option value="Superhero toy">Musical Toys</option>
          <option value="Animal toy">Arts & Crafts</option>
          <option value="Mythical toy">Board Games</option>
          <option value="Superhero toy">Dolls & Dollhouses</option>
          <option value="Animal toy">Role Play & Pretend Play</option>
          <option value="Mythical toy">STEM Toys</option>
          <option value="Superhero toy">Electronic Toys'</option>
          <option value="Mythical toy">Bath Toys</option>
          <option value="Superhero toy">Sports & Outdoor Games</option>
          <option value="Mythical toy">Plush Toys</option>
          <option value="Superhero toy">Infant Toys</option>
          <option value="Mythical toy">Science Kits</option>
          <option value="Superhero toy">Construction Toys</option>
          <option value="Mythical toy">Magic Sets</option>
          <option value="Superhero toy">Learning Tablets</option>
          <option value="Mythical toy">Wooden Toys</option>
          <option value="Superhero toy">Toy Guns & Blasters</option>
          <option value="Mythical toy">Die-Cast & Collectibles</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Age Group</label>
        <select onChange={(e) => onFilterChange('ageGroup', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">All Age Groups</option>
          <option value="0-6 months">0-6 months</option>
          <option value="6-12 months">6-12 months</option>
          <option value="1-2 years">1-2 years</option>
          <option value="2-3 years">2-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5-7 years">5-7 years</option>
          <option value="6-8 years">6-8 years</option>
          <option value="8-10 years">8-10 years</option>
          <option value="10-12 years">10-12 years</option>
          <option value="12+ years">12+ years</option>
          <option value="Teens & Adults">Teens & Adults</option>
        </select>
      </div>
    </div>
  );
};

export default ToysFilter;
