import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CrockeryGrid = ({ items }) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <div
                    key={item._id}
                    className="relative overflow-hidden transition-all duration-300 bg-white border shadow-md border-amber-800 rounded-2xl hover:shadow-xl group"
                >
                    {/* Image */}
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="object-contain w-[282px] h-[282px] rounded-lg shadow"
                    />

                    {/* Content */}
                    <div className="p-4 space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">{item.name}</h2>
                        <p className="text-sm text-gray-500">{item.category} — {item.material}</p>

                        <div className="flex items-center justify-between mt-3">
                            {/* Price */}
                            <div className="flex flex-col">
                                <span className="text-base font-bold text-gray-900">₹{item.price}</span>
                                <span className="text-sm text-gray-400 line-through">₹{item.price + 150}</span>
                            </div>

                            {/* Add to Cart */}
                            <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-amber-800 rounded-md hover:bg-amber-700">
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

export default CrockeryGrid;
