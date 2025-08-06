import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen px-6 pt-32 bg-white">
      <div className="max-w-6xl mx-auto overflow-hidden border shadow-md rounded-2xl">
        <div className="grid md:grid-cols-2">
          {/* Left Section */}
          <div className="bg-[#4F46E5] text-white p-10">
            <h2 className="mb-4 text-3xl font-semibold">Get In Touch</h2>
            <p className="mb-8 text-sm">
              Feel free to contact us? Submit your queries here and we will get
              back to you as soon as possible.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>470-601-1911</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>Pagedone1234@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>789 Oak Lane, Lakeside, TX 54321</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8">
              <i className="text-blue-500 transition fab fa-facebook-f hover:scale-110" />
              <i className="text-pink-500 transition fab fa-instagram hover:scale-110" />
              <i className="text-black transition fab fa-dribbble hover:scale-110" />
              <i className="transition fab fa-linkedin-in text-sky-500 hover:scale-110" />
              <i className="text-red-600 transition fab fa-youtube hover:scale-110" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center p-10 bg-white">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
              <h3 className="mb-6 text-xl font-semibold text-gray-900">
                Send Us Message
              </h3>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                  placeholder="Phone"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 outline-none resize-none rounded-xl focus:ring-2 focus:ring-indigo-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#4F46E5] text-white py-3 rounded-full hover:bg-indigo-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
