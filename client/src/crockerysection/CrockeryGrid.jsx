import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CrockeryGrid = ({ items }) => {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {items.map((item) => (
                <div
                    key={item._id}
                    className="overflow-hidden transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl"
                >
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="object-cover w-full h-56 rounded-t-xl"
                    />

                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                        <p className="text-sm text-gray-500">{item.category} — {item.material}</p>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                                <span className="text-base font-bold text-gray-900">₹{item.price}</span>
                                <span className="text-sm text-gray-400 line-through">₹{item.price + 150}</span>
                            </div>

                            <button className="flex items-center gap-1 px-3 py-1.5 text-xs text-white bg-pink-600 rounded-md hover:bg-pink-500">
                                <ShoppingCart className="w-4 h-4" />
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CrockeryGrid;
