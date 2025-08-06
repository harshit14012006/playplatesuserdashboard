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
      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto sm:grid-cols-2 md:grid-cols-4">
        {/* About */}
        <div>
          <h2 className="mb-3 text-xl font-bold sm:text-2xl">PlayPlates</h2>
          <p className="text-sm leading-relaxed sm:text-base">
            Explore a world of fun and elegance with our Toys & Crockery collection.
          </p>
        </div>

        {/* Quick Links - Dropdown for mobile */}
        <div>
          <h3 className="flex items-center justify-between mb-3 text-sm font-semibold md:block">
            Quick Links
            <button
              className="text-white md:hidden"
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
          <ul className="hidden space-y-2 text-sm md:block sm:text-base">
            {quickLinks.map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="transition-all duration-200 hover:underline hover:tracking-wide"
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
                className="flex flex-col gap-2 mt-2 text-sm md:hidden sm:text-base"
              >
                {quickLinks.map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="transition-all duration-200 hover:underline hover:tracking-wide"
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
          <h3 className="flex items-center justify-between mb-3 text-sm font-semibold md:block">
            Need Help?
            <button
              className="text-white md:hidden"
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
          <ul className="hidden space-y-2 text-sm md:block sm:text-base">
            {helpLinks.map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                  className="transition-all duration-200 hover:underline hover:tracking-wide"
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
                className="flex flex-col gap-2 mt-2 text-sm md:hidden sm:text-base"
              >
                {helpLinks.map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                      className="transition-all duration-200 hover:underline hover:tracking-wide"
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
          <h3 className="mb-3 text-sm font-semibold">Follow Us</h3>
          <div className="flex mt-2 space-x-4">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                variants={socialVariants}
                whileHover="hover"
                className="text-sm text-white transition sm:text-xl hover:text-black"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-sm text-center sm:text-base text-white/90">
        &copy; {new Date().getFullYear()} <span className="font-semibold">PlayPlates</span>. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
