import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ToysSample() {
  const navigate = useNavigate();

  const toyItems = [
    {
      id: "1",
      name: "Wooden Train Set",
      material: "Wood",
      price: "₹999",
      originalPrice: "₹1,299",
      image:
        "https://images-cdn.ubuy.co.in/65a201ee20727069ca69aa1c-battery-operated-train-set-wooden.jpg",
    },
    {
      id: "2",
      name: "Plush Teddy Bear",
      material: "Cotton",
      price: "₹349",
      originalPrice: "₹499",
      image:
        "https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVkZHklMjBiZWFyfGVufDB8fDB8fHww",
    },
    {
      id: "3",
      name: "Building Blocks Set",
      material: "Plastic",
      price: "₹749",
      originalPrice: "₹999",
      image:
        "https://www.kaarr.in/cdn/shop/files/rn-image_picker_lib_temp_0213f552-5c23-4507-8807-28cac364db96.jpg?v=1748787718",
    },
    {
      id: "4",
      name: "Remote Control Car",
      material: "ABS Plastic",
      price: "₹1,499",
      originalPrice: "₹1,999",
      image:
        "https://m.media-amazon.com/images/I/5101j6bF+0L._SY300_SX300_.jpg",
    },
  ];

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
              <p className="text-sm text-gray-500">{item.material}</p>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-800">{item.price}</span>
                  <span className="text-sm text-gray-400 line-through">{item.originalPrice}</span>
                </div>

                <button
                  className="flex items-center gap-1 bg-pink-600 hover:bg-pink-500 text-white text-xs px-3 py-1.5 rounded-md transition duration-200"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
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
    </section>
  );
}
