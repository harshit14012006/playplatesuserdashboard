import toyImg from '../assets/toy.png';
import crockeryImg from '../assets/crockery.png';

export default function Categories() {
  return (
    <section className="relative px-4 py-24 overflow-hidden rounded-lg sm:px-10 bg-gradient-to-br from-blue-50/40 via-pink-100/30 to-purple-100/30 backdrop-blur-xl">

      {/* 🔵 Floating Decorative Shapes */}
      <div className="absolute z-0 w-20 h-20 rounded-full top-12 left-10 bg-pink-300/30 blur-xl animate-float-slow" />
      <div className="absolute z-0 rounded-full bottom-28 right-12 w-28 h-28 bg-yellow-200/30 blur-2xl animate-float-fast" />
      <div className="absolute top-1/2 left-[40%] w-16 h-16 bg-blue-300/30 blur-xl rounded-full animate-float-medium z-0" />
      <div className="absolute z-0 w-10 h-10 rotate-45 rounded-sm top-16 right-24 bg-purple-300/40 blur-lg animate-float-slow" />
      <div className="absolute z-0 w-12 h-12 rounded-full bottom-10 left-1/4 bg-green-300/20 blur-lg animate-float-medium" />

      {/* ✨ Glowing Gradient Shadows */}
      <div className="absolute bottom-0 left-0 z-0 rounded-full w-72 h-72 bg-gradient-to-tr from-pink-200/10 to-blue-200/10 blur-2xl animate-pulse" />
      <div className="absolute right-0 z-0 rounded-full top-1/2 w-52 h-52 bg-purple-300/10 blur-2xl animate-ping" />

      {/* 👉 Heading */}
      <h2 className="relative z-10 mb-16 text-4xl font-extrabold leading-tight text-center text-gray-800 sm:text-5xl drop-shadow-md">
        Explore Our Categories
      </h2>

      {/* 👉 Cards */}
      <div className="relative z-10 grid max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-2">
        {/* Toy Card */}
        <div className="flex flex-col items-center p-10 text-center transition-all duration-300 border shadow-2xl backdrop-blur-lg bg-white/40 border-white/60 rounded-3xl hover:scale-105">
          <img src={toyImg} alt="Toys" className="object-contain w-32 h-32 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-800">Toys</h3>
          <p className="max-w-xs mt-3 text-gray-700">
            Colorful, fun, and educational toys to spark creativity and play.
          </p>
        </div>

        {/* Crockery Card */}
        <div className="flex flex-col items-center p-10 text-center transition-all duration-300 border shadow-2xl backdrop-blur-lg bg-white/40 border-white/60 rounded-3xl hover:scale-105">
          <img src={crockeryImg} alt="Crockery" className="object-contain w-32 h-32 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-800">Crockery</h3>
          <p className="max-w-xs mt-3 text-gray-700">
            Elegant and durable crockery for stylish dining and serving.
          </p>
        </div>
      </div>
    </section>
  );
}
