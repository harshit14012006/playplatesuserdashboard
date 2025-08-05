import toyImg from '../assets/toy.png';
import crockeryImg from '../assets/crockery.png';

export default function Categories() {
  return (
    <section className="relative py-24 px-4 sm:px-10 bg-gradient-to-br from-blue-50/40 via-pink-100/30 to-purple-100/30 backdrop-blur-xl rounded-lg overflow-hidden">

      {/* 🔵 Floating Decorative Shapes */}
      <div className="absolute top-12 left-10 w-20 h-20 bg-pink-300/30 blur-xl rounded-full animate-float-slow z-0" />
      <div className="absolute bottom-28 right-12 w-28 h-28 bg-yellow-200/30 blur-2xl rounded-full animate-float-fast z-0" />
      <div className="absolute top-1/2 left-[40%] w-16 h-16 bg-blue-300/30 blur-xl rounded-full animate-float-medium z-0" />
      <div className="absolute top-16 right-24 w-10 h-10 bg-purple-300/40 rotate-45 blur-lg rounded-sm animate-float-slow z-0" />
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-green-300/20 blur-lg rounded-full animate-float-medium z-0" />

      {/* ✨ Glowing Gradient Shadows */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-pink-200/10 to-blue-200/10 rounded-full blur-2xl animate-pulse z-0" />
      <div className="absolute top-1/2 right-0 w-52 h-52 bg-purple-300/10 rounded-full blur-2xl animate-ping z-0" />

      {/* 👉 Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 relative z-10 text-gray-800 leading-tight drop-shadow-md">
        Explore Our Categories
      </h2>

      {/* 👉 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 max-w-6xl mx-auto">
        {/* Toy Card */}
        <div className="backdrop-blur-lg bg-white/40 border border-white/60 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center hover:scale-105 transition-all duration-300">
          <img src={toyImg} alt="Toys" className="w-32 h-32 mb-6 object-contain" />
          <h3 className="text-2xl font-semibold text-gray-800">Toys</h3>
          <p className="text-gray-700 mt-3 max-w-xs">
            Colorful, fun, and educational toys to spark creativity and play.
          </p>
        </div>

        {/* Crockery Card */}
        <div className="backdrop-blur-lg bg-white/40 border border-white/60 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center hover:scale-105 transition-all duration-300">
          <img src={crockeryImg} alt="Crockery" className="w-32 h-32 mb-6 object-contain" />
          <h3 className="text-2xl font-semibold text-gray-800">Crockery</h3>
          <p className="text-gray-700 mt-3 max-w-xs">
            Elegant and durable crockery for stylish dining and serving.
          </p>
        </div>
      </div>
    </section>
  );
}
