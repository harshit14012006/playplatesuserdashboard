import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

export default function ToyDetails() {
  const { state } = useLocation();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!state?.item) {
    return (
      <div className="py-20 text-center text-gray-500">Product not found.</div>
    );
  }

  const {
    name,
    imageUrl,
    image, // fallback for mock data
    price,
    originalPrice,
    material,
    category,
    ageGroup,
    description,
  } = state.item;

  const imageSrc = imageUrl || image;
  const shouldTruncate = description?.length > 200;

  return (
    <div
      className="relative flex items-center justify-center min-h-screen px-4 pb-12 bg-center bg-no-repeat bg-cover pt-28"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-sm" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-5xl p-6 text-white border shadow-2xl bg-white/10 backdrop-blur-2xl border-white/20 rounded-3xl sm:p-10">
        <h1 className="mb-6 text-2xl font-bold text-center text-white sm:text-3xl">
          {name}
        </h1>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Image */}
          <div className="relative mx-auto md:mx-0">
            <img
              src={imageSrc}
              alt={name}
              className="object-cover transition-transform duration-300 border border-white shadow-md w-44 h-44 md:w-52 md:h-52 rounded-xl hover:scale-105"
            />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
              NEW
            </span>
          </div>

          {/* Tabs + Content */}
          <div className="flex flex-col flex-1 gap-6 md:flex-row">
            {/* Tabs */}
            <div className="space-y-2 md:w-1/4">
              {["overview", "specs"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium capitalize transition duration-200 ${
                    activeTab === tab
                      ? "bg-pink-600 text-white shadow"
                      : "bg-white/20 text-white/80 hover:bg-white/30"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-4 text-sm md:w-3/4 text-white/90">
              {activeTab === "overview" && (
                <>
                  <h2 className="text-xl font-semibold text-white">
                    Product Overview
                  </h2>
                  <p className="leading-relaxed">
                    <strong>
                      {shouldTruncate && !showFullDescription
                        ? `${description?.slice(0, 200)}...`
                        : description || "No description available."}
                    </strong>
                  </p>
                  {shouldTruncate && (
                    <button
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }
                      className="mt-2 text-sm text-pink-300 underline transition hover:text-pink-100"
                    >
                      {showFullDescription ? "Show Less" : "Show More"}
                    </button>
                  )}
                </>
              )}

              {activeTab === "specs" && (
                <>
                  <h2 className="text-xl font-semibold text-white">
                    Specifications
                  </h2>
                  <ul className="ml-5 space-y-1 list-disc">
                    {material && (
                      <li>
                        <strong>Material:</strong> {material}
                      </li>
                    )}
                    {category && (
                      <li>
                        <strong>Category:</strong> {category}
                      </li>
                    )}
                    {ageGroup && (
                      <li>
                        <strong>Age Group:</strong> {ageGroup}
                      </li>
                    )}
                    <li>
                      <strong>Price:</strong> ₹{price}
                    </li>
                    {originalPrice && (
                      <li>
                        <strong>Original Price:</strong> ₹{originalPrice}
                      </li>
                    )}
                    <li>
                      <strong>Dimensions:</strong> 15cm x 15cm x 10cm
                    </li>
                    <li>
                      <strong>Weight:</strong> 300g approx.
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Add to Cart */}
        <div className="pt-6 text-center md:text-right">
          <button className="bg-pink-600 text-white hover:bg-pink-500 font-semibold text-sm py-2.5 px-6 rounded-md shadow transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
