import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaShoppingCart,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const centerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Toys', path: '/toys' },
    { name: 'Crockery', path: '/crockery' },
     { name: '', path: '/crockery' },
  ];

  const rightIcons = [
    { name: 'Cart', path: '/cart', icon: <FaShoppingCart /> },
    { name: 'Login', path: '/login', icon: <FaSignInAlt /> },
    { name: 'Sign Up', path: '/signup', icon: <FaUserPlus /> },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] md:w-[90%] max-w-7xl bg-white/40 backdrop-blur-md border border-white/30 rounded-full shadow-md px-5 sm:px-8 py-3 flex justify-between items-center z-50 text-gray-800"
    >
      {/* Logo */}
      <Link
  to="/"
  className="text-xl font-extrabold tracking-wider transition-transform sm:text-2xl hover:scale-105"
>
  <span className="text-blue-600 transition hover:text-blue-700">Play</span>
<span className="transition text-amber-700 hover:text-amber-800">Plates</span>

</Link>


      {/* Center Links (Desktop) */}
      <div className="hidden mx-auto space-x-10 text-sm font-medium tracking-wide md:flex">
        {centerLinks.map((link) => (
          <motion.div
            key={link.name}
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 180, damping: 15 }}
          >
            <Link
              to={link.path}
              className="transition-all duration-200 hover:text-green-600 hover:underline underline-offset-4"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Right Icons (Desktop) */}
      <div className="items-center hidden space-x-5 md:flex">
        {rightIcons.map((link) => (
          <motion.div
            key={link.name}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 180, damping: 12 }}
          >
            <Link
              to={link.path}
              className="text-xl transition-transform hover:text-green-600"
            >
              {link.icon}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-xl p-6 space-y-5 z-40 flex flex-col text-center"
          >
            {centerLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium tracking-wide text-gray-800 transition-all duration-200 hover:text-pink-600"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <div className="flex justify-center gap-8 pt-3">
              {rightIcons.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl text-gray-700 transition-transform hover:text-pink-600"
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
