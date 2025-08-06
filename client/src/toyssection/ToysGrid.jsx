import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ToysGrid = ({ toys }) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {toys.map((toy) => (
                <div
                    key={toy._id}
                    className="relative overflow-hidden transition-all duration-300 bg-white border border-pink-600 shadow-md rounded-2xl hover:shadow-xl group"
                >
                    {/* Image */}
                    <img
                        src={toy.imageUrl}
                        alt={toy.name}
                        className="object-contain w-[282px] h-[282px] rounded-lg shadow"
                    />

                    {/* Content */}
                    <div className="p-4 space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">{toy.name}</h2>
                        <p className="text-sm text-gray-500">{toy.category} — {toy.ageGroup}</p>

                        <div className="flex items-center justify-between mt-3">
                            {/* Price */}
                            <div className="flex flex-col">
                                <span className="text-base font-bold text-gray-900">₹{toy.price}</span>
                                <span className="text-sm text-gray-400 line-through">₹{toy.price + 150}</span>
                            </div>

                            {/* Add to Cart */}
                            <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-pink-600 rounded-md hover:bg-pink-500">
                                <ShoppingCart className="w-4 h-4" />
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ToysGrid;
