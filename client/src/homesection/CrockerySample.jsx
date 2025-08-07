import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CrockerySample() {
  const navigate = useNavigate();
  const [crockeryItems, setCrockeryItems] = useState([]);

  useEffect(() => {
    const fetchCrockery = async () => {
      try {
        const response = await axios.get(
          "https://playplatesadmindashboardbackend.onrender.com/api/crockery/get-all-crockery"
        );
        const data = response.data;
        console.log(response)
        // Set only first 4 items to state for display
        setCrockeryItems(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching crockery data:", error);
      }
    };

    fetchCrockery();
  }, []);

  return (
    <section className="px-4 py-20 overflow-hidden sm:px-8 lg:px-16 bg-gradient-to-br from-stone-100 via-sky-50 to-slate-100">
      <h2 className="mb-12 text-4xl font-bold text-center text-amber-800">
        Explore Our Crockery Collection
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {crockeryItems.map((item) => (
          <div
            key={item._id}
            className="relative overflow-hidden transition-transform bg-white shadow-md cursor-pointer rounded-xl hover:scale-105"
            onClick={() =>
              navigate(`/crockery-details/${item._id}`, { state: { item } })
            }
          >
            {/* Sale badge */}
            <div className="absolute top-0 left-0 z-10 px-3 py-1 text-xs font-semibold text-white shadow bg-amber-800 rounded-br-xl">
              SALE
            </div>

            {/* Image */}
            <img
              src={item.imageUrl}
              alt={item.name}
              className="object-cover w-full h-56"
            />

            {/* Details */}
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-base text-gray-500">{item.material}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-bold text-gray-900">
                  ₹{item.price}
                </span>
                <button className="flex items-center gap-1 bg-amber-800 text-white text-xs px-3 py-1.5 rounded-md hover:bg-amber-700 cursor-pointer">
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
          to="/crockery"
          className="px-6 py-2 text-white transition-colors duration-300 rounded-full cursor-pointer bg-amber-800 hover:bg-amber-900"
        >
          View More
        </Link>
      </div>
    </section>
  );
}
