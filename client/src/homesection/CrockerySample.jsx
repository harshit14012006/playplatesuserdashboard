import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CrockerySample() {
  const navigate = useNavigate();

  const crockeryItems = [
    {
      id: "1",
      name: "Elegant Plate Set",
      material: "Ceramic",
      price: "₹799",
      originalPrice: "₹999",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTn0wjJwBSiAemWthfihyJz5QEBt7vlmCgH1D4ha9kZ0NhVeVUVJPZl7DzKHcvUaAWL1lPZeHuuZPDS8m28zISZNcKiRCORPOPMYpEQlkhf",
    },
    {
      id: "2",
      name: "Classic Tea Cups",
      material: "Porcelain",
      price: "₹499",
      originalPrice: "₹699",
      image:
        "https://vigneto.in/cdn/shop/products/20220806_104542384_iOS-Copy.jpg?v=1659784744&width=823",
    },
    {
      id: "3",
      name: "Modern Serving Bowls",
      material: "Stoneware",
      price: "₹1,299",
      originalPrice: "₹1,599",
      image:
        "https://exclusivelane.com/cdn/shop/files/EL-005-2357_A_result_580x.webp?v=1752834070",
    },
    {
      id: "4",
      name: "Stylish Mug Set",
      material: "Bone China",
      price: "₹649",
      originalPrice: "₹899",
      image:
        "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwe3e51e5d/original/90_N29220-N403771_N1931_20_Medusa~Gala~Mug~2~Set-Coffee~~Tea-Versace-online-store_0_0.jpg?sw=850&q=85&strip=true",
    },
  ];

  return (
    <section className="px-4 py-20 overflow-hidden sm:px-8 lg:px-16 bg-gradient-to-br from-stone-100 via-sky-50 to-slate-100">
      <h2 className="mb-12 text-4xl font-bold text-center text-amber-800">
        Explore Our Crockery Collection
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {crockeryItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden transition-transform bg-white shadow-md cursor-pointer rounded-xl hover:scale-105"
            onClick={() =>
              navigate(`/crockery-details/${item.id}`, { state: { item } })
            }
          >
            {/* Sale badge */}
            <div className="absolute top-0 left-0 z-10 px-3 py-1 text-xs font-semibold text-white shadow bg-amber-800 rounded-br-xl">
              SALE
            </div>

            {/* Image */}
            <img
              src={item.image}
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
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">
                    {item.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {item.originalPrice}
                  </span>
                </div>
                <button className="flex items-center gap-1 bg-amber-800 text-white text-xs px-3 py-1.5 rounded-md hover:bg-amber-700 cursor-pointer">
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
