import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Mini carousel inside each grid card
function MiniCarousel({ images, title }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      className="relative w-full overflow-hidden h-28 md:h-32 lg:h-36 rounded-2xl"
      title={title}
    >
      <img
        src={images[index]}
        alt={title}
        className="object-contain w-full h-full p-2 transition-all duration-500 ease-in-out shadow-md"
      />
    </div>
  );
}

export default function HeroSection() {
  const slides = [
    {
      featured: {
        title: "Toy of the Week",
        description: "This fun and educational toy is a favorite among kids!",
        image: "https://m.media-amazon.com/images/I/414RZqkENPL._AC_SR250,250_QL65_.jpg",
        button: "Explore Toys",
      },
      gridItems: [
        {
          title: "Puzzle Set",
          images: [
            "https://m.media-amazon.com/images/I/51sAcz4Oh6L._AC_SR250,250_QL65_.jpg",
            "https://m.media-amazon.com/images/I/511dqOa-wEL._SY300_SX300_QL70_FMwebp_.jpg",
          ],
        },
        {
          title: "Kitchen Plates",
          images: [
            "https://m.media-amazon.com/images/I/419SwHwwYEL._AC_SR250,250_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81MWJ0bTcJL._AC_UL480_FMwebp_QL65_.jpg",
          ],
        },
        {
          title: "Soft Plush Toy",
          images: [
            "https://m.media-amazon.com/images/I/71LyxHucSsL._AC_SR230,210_CB1169409_QL70_.jpg",
            "https://m.media-amazon.com/images/I/61fwWottsML._AC_SR230,210_CB1169409_QL70_.jpg",
          ],
        },
        {
          title: "Serving Bowls",
          images: [
            "https://m.media-amazon.com/images/I/51h23kwZkBL._AC_SR250,250_QL65_.jpg",
            "https://m.media-amazon.com/images/I/41o6BxqmCjL._AC_SR250,250_QL65_.jpg",
          ],
        },
      ],
    },
    {
      featured: {
        title: "Premium Crockery",
        description: "Elegant designs to elevate your dining experience.",
        image: "https://m.media-amazon.com/images/I/915qirizDZL._AC_UL480_FMwebp_QL65_.jpg",
        button: "Explore Crockery",
      },
      gridItems: [
        {
          title: "Cutlery Set",
          images: [
            "https://m.media-amazon.com/images/I/81jp4Z3EAGL._AC_SR230,210_CB1169409_QL70_.jpg",
            "https://m.media-amazon.com/images/I/71yZP1L9R5L._AC_UL480_FMwebp_QL65_.jpg",
          ],
        },
        {
          title: "Colorful Plates",
          images: [
            "https://m.media-amazon.com/images/I/41v3muBA2jL._AC_SR250,250_QL65_.jpg",
            "https://m.media-amazon.com/images/I/71xWTBMEKpL._AC_UL480_FMwebp_QL65_.jpg",
          ],
        },
        {
          title: "Toy Cars",
          images: [
            "https://m.media-amazon.com/images/I/41xFoIDxhqL._AC_SR250,250_QL65_.jpg",
            "https://m.media-amazon.com/images/I/611oYnr5iRL._AC_UL480_FMwebp_QL65_.jpg",
          ],
        },
        {
          title: "Mugs Collection",
          images: [
            "https://m.media-amazon.com/images/I/5127q7AVxhL._AC_SR250,250_QL65_.jpg",
            "https://m.media-amazon.com/images/I/41S1p2y50ZL._AC_SR250,250_QL65_.jpg",
          ],
        },
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const { featured, gridItems } = slides[currentSlide];

  return (
    <div>
      <section className="relative flex items-center justify-center w-full min-h-screen px-4 py-16 bg-gradient-to-br from-pink-50 via-white to-yellow-50 md:px-8 lg:px-12">
        <div className="grid items-start w-full grid-cols-1 gap-10 mx-auto mt-10 max-w-7xl lg:grid-cols-2">
          {/* Left: Featured Section */}
          <div className="flex flex-row items-center gap-6 p-4 bg-white border shadow-md rounded-2xl">
            {/* Left: Image */}
            <img
              src={featured.image}
              alt={featured.title}
              className="object-contain bg-white shadow-sm w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-xl"
            />

            {/* Right: Text Content */}
            <div className="space-y-3 text-left">
              <h2 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
                {featured.title}
              </h2>
              <p className="text-sm text-gray-600 sm:text-base md:text-lg">
                {featured.description}
              </p>
              {featured.title === "Premium Crockery" ? (
                <Link
                  to="/crockery"
                  className="inline-block px-6 py-2 text-sm font-medium text-white bg-pink-600 rounded-full hover:bg-pink-700"
                >
                  {featured.button}
                </Link>
              ) : (
                <Link
                  to="/toys"
                  className="inline-block px-6 py-2 text-sm font-medium text-white bg-pink-600 rounded-full hover:bg-pink-700"
                >
                  {featured.button}
                </Link>
              )}

            </div>
          </div>


          {/* Right: Zig-Zag Grid of Mini Carousels */}
          <div className="grid w-full grid-cols-2 gap-3 sm:gap-6">
            {gridItems.map((item, idx) => (
              <div
                key={idx}
                className={`transform transition-transform duration-300 hover:scale-105 ${idx % 2 === 0 ? "-translate-y-2" : "translate-y-2"
                  }`}
              >
                <MiniCarousel images={item.images} title={item.title} />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute flex justify-center w-full space-x-2 bottom-4 sm:bottom-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-pink-600 scale-125" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
