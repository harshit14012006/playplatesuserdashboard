import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import ToysGrid from '../toyssection/ToysGrid';
import ToysSlider from '../toyssection/ToysSlider';
import ToysSearchBar from '../toyssection/ToysSearchBar';
import ToysSort from '../toyssection/ToysSort';
import ToysFilter from '../toyssection/ToysFilter';

export default function Toys() {
  const [toysData, setToysData] = useState([]);
  const [filters, setFilters] = useState({ category: '', ageGroup: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);

    const shopSectionRef = useRef(null);
  // 🔁 Fetch toys from backend
  useEffect(() => {
    const fetchToys = async () => {
      try {
        const res = await axios.get('https://playplatesadmindashboardbackend.onrender.com/api/toys/get-all-toys');
        setToysData(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching toys:', error);
        setLoading(false);
      }
    };

    fetchToys();
  }, []);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  // 🔎 Filter, search, and sort logic
  let filteredToys = toysData.filter((toy) => {
    return (
      (filters.category === '' || toy.category === filters.category) &&
      (filters.ageGroup === '' || toy.ageGroup === filters.ageGroup) &&
      toy.name.toLowerCase().includes(searchQuery)
    );
  });

  if (sortOrder === 'name-asc') {
    filteredToys.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === 'name-desc') {
    filteredToys.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortOrder === 'price-asc') {
    filteredToys.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-desc') {
    filteredToys.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="min-h-screen px-6 ">
      <ToysSlider onShopClick={() => shopSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}/>

      <h1 className="mt-8 mb-4 text-4xl font-bold">Toys Collection</h1>
      <p className="max-w-2xl mb-4 text-gray-700">
        Explore a variety of fun, safe, and educational toys for all age groups.
      </p>

      <ToysSearchBar onSearch={handleSearch}    id="shop-section"/>
      <ToysSort onSortChange={handleSortChange} />

      <div className="flex flex-col gap-6 mt-4 lg:flex-row">
        <div className="lg:w-1/4">
          <ToysFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:w-3/4">
          {loading ? (
            <p className="text-gray-600">Loading toys...</p>
          ) : (
            <ToysGrid toys={filteredToys} />
          )}
        </div>
      </div>
    </section>
  );
}
