export default function Signup() {
  return (
    <section className="min-h-screen pt-32 px-6">
      <h1 className="text-4xl font-bold mb-4">Create an Account</h1>
      <form className="max-w-sm mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
        <input type="password" placeholder="Password" className="w-full p-3 border rounded-md" />
        <button className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Sign Up</button>
      </form>
    </section>
  );
}
