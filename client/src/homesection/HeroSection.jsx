import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced Mini carousel with professional styling
function MiniCarousel({ images, title, index }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000 + index * 500); // Staggered timing for visual interest
    return () => clearInterval(timer);
  }, [images.length, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-500 top-10"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image Container */}
      <div className="relative w-full h-32 md:h-36 lg:h-40 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
          />
        </AnimatePresence>
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>

      {/* Product Title */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
        <h3 className="text-white text-sm font-semibold tracking-wide">
          {title}
        </h3>
      </div>

      {/* Image Indicators */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 flex space-x-1">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-indigo-500 scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function HeroSection() {
  const slides = [
    {
      featured: {
        title: "Toy of the Week",
        subtitle: "Educational & Fun",
        description: "Discover premium toys designed to spark creativity and learning in children of all ages.",
        image: "https://m.media-amazon.com/images/I/414RZqkENPL._AC_SR250,250_QL65_.jpg",
        button: "Explore Collection",
        badge: "Popular",
        stats: { rating: "4.9", reviews: "2.1k" }
      },
      gridItems: [
        {
          title: "Puzzle Collections",
          images: [
            "https://m.media-amazon.com/images/I/51sAcz4Oh6L._AC_SR250,250_QL65_.jpg",
            "https://m.media-amazon.com/images/I/511dqOa-wEL._SY300_SX300_QL70_FMwebp_.jpg",
          ],
        },
        {
          title: "Kitchen Essentials",
          images: [
            "https://m.media-amazon.com/images/I/419SwHwwYEL._AC_SR250,250_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81MWJ0bTcJL._AC_UL480_FMwebp_QL65_.jpg",
          ],
        },
        {
          title: "Plush Companions",
          images: [
            "https://m.media-amazon.com/images/I/71LyxHucSsL._AC_SR230,210_CB1169409_QL70_.jpg",
            "https://m.media-amazon.com/images/I/61fwWottsML._AC_SR230,210_CB1169409_QL70_.jpg",
          ],
        },
        {
          title: "Dining Sets",
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
        subtitle: "Elegant Dining",
        description: "Transform your dining experience with our curated collection of sophisticated tableware and serveware.",
        image: "https://m.media-amazon.com/images/I/915qirizDZL._AC_UL480_FMwebp_QL65_.jpg",
        button: "Shop Now",
        badge: "New",
        stats: { rating: "4.8", reviews: "1.8k" }
      },
      gridItems: [
        {
          title: "Cutlery Sets",
          images: [
            "https://m.media-amazon.com/images/I/81jp4Z3EAGL._AC_SR230,210_CB1169409_QL70_.jpg",
            "https://m.media-amazon.com/images/I/71yZP1L9R5L._AC_UL480_FMwebp_QL65_.jpg",
          ],
        },
        {
          title: "Designer Plates",
          images: [
            "https://m.media-amazon.com/images/I/41v3muBA2jL._AC_SR250,250_QL65_.jpg",
            "https://m.media-amazon.com/images/I/71xWTBMEKpL._AC_UL480_FMwebp_QL65_.jpg",
          ],
        },
        {
          title: "Toy Vehicles",
          images: [
            "https://m.media-amazon.com/images/I/41xFoIDxhqL._AC_SR250,250_QL65_.jpg",
            "https://m.media-amazon.com/images/I/611oYnr5iRL._AC_UL480_FMwebp_QL65_.jpg",
          ],
        },
        {
          title: "Mug Collections",
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
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const { featured, gridItems } = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-100/10 to-purple-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
        >
          {/* Left: Featured Section - Professional Layout */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-2xl shadow-slate-900/10 overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                  featured.badge === 'New' 
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                    : 'bg-orange-100 text-orange-700 border border-orange-200'
                }`}>
                  {featured.badge}
                </span>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
                {/* Product Image with enhanced styling */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative flex-shrink-0"
                >
                  <div className="w-48 h-48 md:w-64 md:h-64 relative">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl transform rotate-6 scale-105 opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-slate-100 to-white rounded-2xl shadow-lg" />
                    
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="relative z-10 w-full h-full object-contain p-6 transition-transform duration-500"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2"
                    >
                      {featured.subtitle}
                    </motion.p>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4"
                    >
                      {featured.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-slate-600 text-lg leading-relaxed max-w-lg"
                    >
                      {featured.description}
                    </motion.p>
                  </div>

                  {/* Stats and Rating */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center justify-center lg:justify-start gap-6 text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="font-semibold text-slate-700">{featured.stats.rating}</span>
                      <span className="text-slate-500">({featured.stats.reviews} reviews)</span>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Link
                      to={featured.title === "Premium Crockery" ? "/crockery" : "/toys"}
                      className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      {featured.button}
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Professional Grid Layout */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {gridItems.map((item, idx) => (
                <motion.div
                  key={`${currentSlide}-${idx}`}
                  className={`transform transition-all duration-500 ${
                    idx % 2 === 0 ? 'lg:-translate-y-8' : 'lg:translate-y-8'
                  }`}
                  whileHover={{ y: idx % 2 === 0 ? -40 : 24 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <MiniCarousel 
                    images={item.images} 
                    title={item.title} 
                    index={idx}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {[
                { icon: '🚚', label: 'Free Shipping', desc: 'On orders $50+' },
                { icon: '⭐', label: 'Top Quality', desc: 'Premium materials' },
                { icon: '🔄', label: '30-Day Return', desc: 'Easy returns' }
              ].map((feature, idx) => (
                <div key={idx} className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="font-semibold text-slate-900 text-sm">{feature.label}</div>
                  <div className="text-xs text-slate-600">{feature.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Navigation Dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center items-center space-x-4 mt-16"
        >
          <div className="flex space-x-3">
            {slides.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`relative transition-all duration-300 ${
                  currentSlide === idx 
                    ? "w-8 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" 
                    : "w-3 h-3 bg-slate-300 rounded-full hover:bg-slate-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          
          {/* Progress indicator */}
          <div className="hidden md:flex items-center space-x-2 ml-6 text-sm text-slate-500">
            <span>{String(currentSlide + 1).padStart(2, '0')}</span>
            <div className="w-8 h-px bg-slate-300">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              />
            </div>
            <span>{String(slides.length).padStart(2, '0')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
