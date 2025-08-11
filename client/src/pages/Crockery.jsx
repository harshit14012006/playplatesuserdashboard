import React, { useEffect, useState ,useRef} from 'react';
import axios from 'axios';
import CrockeryGrid from '../crockerysection/CrockeryGrid';
import CrockerySlider from '../crockerysection/CrockerySlider';
import CrockerySearchBar from '../crockerysection/CrockerySearchBar';
import CrockerySort from '../crockerysection/CrockerySort';
import CrockeryFilter from '../crockerysection/CrockeryFilter';

export default function Crockery() {
  const [allItems, setAllItems] = useState([]);
  const [filters, setFilters] = useState({ category: '', material: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
    const shopSectionRef = useRef(null);

  // Fetch from API
  useEffect(() => {
    const fetchCrockery = async () => {
      try {
        const res = await axios.get('https://playplatesadmindashboardbackend.onrender.com/api/crockery/get-all-crockery');
        setAllItems(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load crockery items');
        setLoading(false);
      }
    };

    fetchCrockery();
  }, []);

  // Handle filter/search/sort
  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  // Filtered + searched + sorted data
  let filteredItems = allItems.filter((item) => {
    return (
      (filters.category === '' || item.category === filters.category) &&
      (filters.material === '' || item.material === filters.material) &&
      item.name.toLowerCase().includes(searchQuery)
    );
  });

  if (sortOrder === 'name-asc') {
    filteredItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === 'name-desc') {
    filteredItems.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortOrder === 'price-asc') {
    filteredItems.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-desc') {
    filteredItems.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="min-h-screen px-6  pb-16">
      <CrockerySlider onShopClick={() => shopSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}/>

      <h1 className="mt-8 mb-4 text-4xl font-bold" ref={shopSectionRef}>Crockery Collection</h1>
      <p className="max-w-2xl mb-4 text-gray-700">
        Explore premium kitchenware including glasses, bowls, bottles and more.
      </p>

      <CrockerySearchBar onSearch={handleSearch} />
      <CrockerySort onSortChange={handleSortChange} />

      <div className="flex flex-col gap-6 mt-4 lg:flex-row">
        <div className="lg:w-1/4">
          <CrockeryFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:w-3/4">
          {loading ? (
            <p className="text-gray-500">Loading crockery items...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <CrockeryGrid items={filteredItems} />
          )}
        </div>
      </div>
    </section>
  );
}
