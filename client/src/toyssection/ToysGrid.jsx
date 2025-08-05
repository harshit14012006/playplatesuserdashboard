import React from 'react';
import { ShoppingCart } from 'lucide-react'; // npm install lucide-react

const ToysGrid = ({ toys }) => {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {toys.map((toy) => (
                <div
                    key={toy._id}
                    className="relative overflow-hidden transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl"
                >
                    {/* Image */}
                    <img
                        src={toy.imageUrl}
                        alt={toy.name}
                        className="object-cover w-full h-52 rounded-t-xl"
                    />

                    {/* Content */}
                    <div className="p-5 bg-white">
                        <h2 className="text-lg font-semibold text-gray-900">{toy.name}</h2>
                        <p className="text-sm text-gray-500">{toy.category}</p>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-gray-900">
                                    {toy.price}
                                </span>
                                <span className="text-sm text-gray-400 line-through">
                                    {toy.originalPrice}
                                </span>
                                <span className="text-sm text-gray-400 line-through">₹{toy.price + 150}</span>
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
    );
};

export default ToysGrid;
