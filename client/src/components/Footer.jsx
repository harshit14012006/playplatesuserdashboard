import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const socialVariants = {
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { type: 'spring', stiffness: 300, damping: 10 },
  },
};

const Footer = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const quickLinks = ['Home', 'Toys', 'Crockery', 'Contact'];
  const helpLinks = ['FAQs', 'Shipping', 'Returns', 'Support'];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-[#ff4d4d] text-white py-10 px-4 sm:px-6 mt-10 rounded-t-3xl shadow-xl"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="font-bold text-xl sm:text-2xl mb-3">PlayPlates</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Explore a world of fun and elegance with our Toys & Crockery collection.
          </p>
        </div>

        {/* Quick Links - Dropdown for mobile */}
        <div>
          <h3 className="font-semibold text-sm mb-3 flex items-center justify-between md:block">
            Quick Links
            <button
              className="md:hidden text-white"
              onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
            >
              <ChevronDown
                className={`ml-2 transform transition-transform ${
                  isQuickLinksOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </h3>

          {/* Desktop Static List */}
          <ul className="hidden md:block space-y-2 text-sm sm:text-base">
            {quickLinks.map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="hover:underline hover:tracking-wide transition-all duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Dropdown List */}
          <AnimatePresence>
            {isQuickLinksOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden flex flex-col gap-2 text-sm sm:text-base mt-2"
              >
                {quickLinks.map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="hover:underline hover:tracking-wide transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Need Help Dropdown */}
        <div>
          <h3 className="font-semibold text-sm mb-3 flex items-center justify-between md:block">
            Need Help?
            <button
              className="md:hidden text-white"
              onClick={() => setIsHelpOpen(!isHelpOpen)}
            >
              <ChevronDown
                className={`ml-2 transform transition-transform ${
                  isHelpOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </h3>

          {/* Desktop Static List */}
          <ul className="hidden md:block space-y-2 text-sm sm:text-base">
            {helpLinks.map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                  className="hover:underline hover:tracking-wide transition-all duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Dropdown List */}
          <AnimatePresence>
            {isHelpOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden flex flex-col gap-2 text-sm sm:text-base mt-2"
              >
                {helpLinks.map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                      className="hover:underline hover:tracking-wide transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-sm mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                variants={socialVariants}
                whileHover="hover"
                className="text-white text-sm sm:text-xl hover:text-black transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm sm:text-base text-white/90">
        &copy; {new Date().getFullYear()} <span className="font-semibold">PlayPlates</span>. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
