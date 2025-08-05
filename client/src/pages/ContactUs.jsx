export default function Contact() {
  return (
    <section className="min-h-screen pt-32 px-6">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-4">We’d love to hear from you. Drop us a message!</p>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
        <textarea rows="4" placeholder="Your message..." className="w-full p-3 border rounded-md"></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
}
