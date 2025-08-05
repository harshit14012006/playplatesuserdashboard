// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Toys from './pages/Toys'
import Crockery from './pages/Crockery'
import ContactUs from './pages/ContactUs'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/crockery" element={<Crockery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
