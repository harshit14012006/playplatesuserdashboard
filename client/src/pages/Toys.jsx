import React, { useState } from 'react';
import ToysGrid from '../toyssection/ToysGrid';
import ToysSlider from '../toyssection/ToysSlider';
import ToysSearchBar from '../toyssection/ToysSearchBar';
import ToysSort from '../toyssection/ToysSort';
import ToysFilter from '../toyssection/ToysFilter';

const toysData = [
  {
    _id: "1",
    name: "Harry Potter Updated",
    price: 9090,
    category: "Mythical toy",
    ageGroup: "3-7 years",
    imageUrl: "https://ik.imagekit.io/harshitimgkit/harrypotterwallpaper_VmFO1hSHs.jpg"
  },
  {
    _id: "2",
    name: "Superman Hero",
    price: 500,
    category: "Superhero toy",
    ageGroup: "7-10 years",
    imageUrl: "https://ik.imagekit.io/harshitimgkit/superman_Q9XnMUMFO.jpg"
  },
  {
    _id: "3",
    name: "Animal Farm Set",
    price: 300,
    category: "Animal toy",
    ageGroup: "3-7 years",
    imageUrl: "https://ik.imagekit.io/harshitimgkit/animalfarm_XGqGnEf5m.jpg"
  },
  {
    _id: "4",
    name: "Thor Action Figure",
    price: 1200,
    category: "Superhero toy",
    ageGroup: "7-10 years",
    imageUrl: "https://ik.imagekit.io/harshitimgkit/thor_hammer.jpg"
  },
  {
    _id: "5",
    name: "Unicorn Magic",
    price: 750,
    category: "Mythical toy",
    ageGroup: "3-7 years",
    imageUrl: "https://ik.imagekit.io/harshitimgkit/unicorn.jpg"
  }
];

export default function Toys() {
  const [filters, setFilters] = useState({ category: '', ageGroup: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  let filteredToys = toysData.filter((toy) => {
    return (
      (filters.category === '' || toy.category === filters.category) &&
      (filters.ageGroup === '' || toy.ageGroup === filters.ageGroup) &&
      (toy.name.toLowerCase().includes(searchQuery))
    );
  });

  if (sortOrder === 'name-asc') {
    filteredToys.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === 'name-desc') {
    filteredToys.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <section className="min-h-screen px-6 pt-32">
      <ToysSlider />

      <h1 className="mt-8 mb-4 text-4xl font-bold">Toys Collection</h1>
      <p className="max-w-2xl mb-4 text-gray-700">
        Explore a variety of fun, safe, and educational toys for all age groups.
      </p>

      <ToysSearchBar onSearch={handleSearch} />
      <ToysSort onSortChange={handleSortChange} />

      <div className="flex flex-col gap-6 mt-4 lg:flex-row">
        <div className="lg:w-1/4">
          <ToysFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:w-3/4">
          <ToysGrid toys={filteredToys} />
        </div>
      </div>
    </section>
  );
}
