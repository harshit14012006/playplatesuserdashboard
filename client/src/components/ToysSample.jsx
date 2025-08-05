import { ShoppingCart } from "lucide-react";

export default function ToysSample() {
  const toyItems = [
    {
      name: "Wooden Train Set",
      material: "Wood",
      price: "₹999",
      originalPrice: "₹1,299",
      image:
        "https://images-cdn.ubuy.co.in/65a201ee20727069ca69aa1c-battery-operated-train-set-wooden.jpg",
    },
    {
      name: "Plush Teddy Bear",
      material: "Cotton",
      price: "₹349",
      originalPrice: "₹499",
      image:
        "https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVkZHklMjBiZWFyfGVufDB8fDB8fHww",
    },
    {
      name: "Building Blocks Set",
      material: "Plastic",
      price: "₹749",
      originalPrice: "₹999",
      image:
        "https://www.kaarr.in/cdn/shop/files/rn-image_picker_lib_temp_0213f552-5c23-4507-8807-28cac364db96.jpg?v=1748787718",
    },
    {
      name: "Remote Control Car",
      material: "ABS Plastic",
      price: "₹1,499",
      originalPrice: "₹1,999",
      image:
        "https://m.media-amazon.com/images/I/5101j6bF+0L._SY300_SX300_.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {toyItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 relative"
          >
            {/* Sale badge */}
            <div className="absolute bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded-br-lg z-10">
              Sale
            </div>

            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            {/* Details */}
            <div className="p-4 space-y-2">
              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h3>

              {/* Material */}
              <p className="text-base text-gray-500">{item.material}</p>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">
                    {item.price}
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    {item.originalPrice}
                  </span>
                </div>

                <button className="flex items-center gap-1 bg-pink-600 text-white text-xs px-3 py-1.5 rounded-md hover:bg-pink-500 cursor-pointer">
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
