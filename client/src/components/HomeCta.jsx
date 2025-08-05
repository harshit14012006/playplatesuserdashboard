export default function HomeCta() {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Ready to take the next step?
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Join us today and experience the best solutions tailored for your success.
        </p>
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-md shadow hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
