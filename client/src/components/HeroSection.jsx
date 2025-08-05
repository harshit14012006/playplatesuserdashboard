// components/HeroSection.jsx
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  {
    title: "Welcome to PlayPlates",
    description: "Discover toys and crockery that bring both fun and functionality to your life.",
    cta: "Shop Now",
  },
  {
    title: "Fun Meets Function",
    description: "Explore premium crockery and delightful toys for every generation.",
    cta: "Explore Collection",
  },
  {
    title: "Elegance in Every Dish",
    description: "Our crockery brings style and durability to your kitchen table.",
    cta: "View Crockery",
  },
];

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
      {/* Optional background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>

      <div className="w-full max-w-5xl z-10 px-6 sm:px-10">
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index} className="text-center py-20 sm:py-32">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800"
              >
                {item.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-6"
              >
                {item.description}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition"
              >
                {item.cta}
              </motion.button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
