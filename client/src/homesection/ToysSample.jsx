import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ToysSample() {
  const navigate = useNavigate();
  const [toyItems, setToyItems] = useState([]);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await axios.get(
          "https://playplatesadmindashboardbackend.onrender.com/api/toys/get-all-toys"
        );

        const toys = response.data.map((item) => ({
          id: item._id,
          name: item.name,
          price: `₹${item.price}`,
          originalPrice: item.originalPrice ? `₹${item.originalPrice}` : null,
          image: item.imageUrl,
          material: item.material,
          category: item.category,
          ageGroup: item.ageGroup,
          description: item.description,
        }));

        console.log("Fetched toys:", toys);
        setToyItems(toys.slice(0, 4)); // show only 4
      } catch (error) {
        console.error("Error fetching toys:", error);
      }
    };

    fetchToys();
  }, []);

  const handleCardClick = (item) => {
    navigate(`/toy-details/${item.id}`, { state: { item } });
  };

  return (
    <section className="px-4 py-20 sm:px-8 lg:px-16 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      <h2 className="mb-12 text-4xl font-bold text-center text-pink-700">
        Explore Our Toys Collection
      </h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {toyItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden transition-transform bg-white shadow-md cursor-pointer rounded-xl hover:scale-105"
            onClick={() => handleCardClick(item)}
          >
            <div className="absolute top-0 left-0 z-10 px-3 py-1 text-xs font-semibold text-white bg-pink-600 shadow rounded-br-xl">
              SALE
            </div>

            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-56"
            />

            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>

              <div className="flex items-center justify-between mt-3">
                <span className="text-sm font-bold text-gray-800">
                  {item.price}
                </span>

                <button
                  className="flex items-center gap-1 bg-pink-600 hover:bg-pink-500 text-white text-xs px-3 py-1.5 rounded-md transition duration-200"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent triggering navigation
                    alert("Added to cart!");
                  }}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/toys"
          className="px-6 py-2 text-white transition-colors duration-300 bg-pink-600 rounded-full cursor-pointer hover:bg-pink-700"
        >
          View More
        </Link>
      </div>
    </section>
  );
}
