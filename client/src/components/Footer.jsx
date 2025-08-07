import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin, Shield, Truck, Award, Clock } from 'lucide-react';

const socialVariants = {
  hover: {
    scale: 1.1,
    y: -2,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
};

const paymentIcons = [
  { 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 4.5h21v15h-21z" className="fill-blue-600"/>
        <path d="M7.5 9h9v1.5h-9zm0 3h6v1.5h-6z" className="fill-white"/>
      </svg>
    ), 
    alt: 'Visa' 
  },
  { 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l10 8v12H2V10z" className="fill-red-600"/>
        <path d="M8 12h8v2H8z" className="fill-orange-400"/>
      </svg>
    ), 
    alt: 'Mastercard' 
  },
  { 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.076 2.013C3.175 2.013 0 5.188 0 9.089s3.175 7.076 7.076 7.076 7.076-3.175 7.076-7.076S10.977 2.013 7.076 2.013z" className="fill-blue-500"/>
        <path d="M16.924 7.011C20.825 7.011 24 10.186 24 14.087s-3.175 7.076-7.076 7.076-7.076-3.175-7.076-7.076 3.175-7.076 7.076-7.076z" className="fill-yellow-400"/>
      </svg>
    ), 
    alt: 'PayPal' 
  },
  { 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="15" rx="3" className="fill-blue-700"/>
        <path d="M8 9h8v2H8z" className="fill-white"/>
      </svg>
    ), 
    alt: 'American Express' 
  },
];

const Footer = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const helpLinks = [
    { name: 'Customer Support', href: '/support' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns & Refunds', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const trustBadges = [
    { icon: Shield, text: 'Secure Payments' },
    { icon: Truck, text: 'Fast Shipping' },
    { icon: Award, text: 'Premium Quality' },
    { icon: Clock, text: '24/7 Support' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 mt-20"
    >
      {/* Trust Badges Section */}
      <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow duration-300">
                  <badge.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                PlayPlates
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Premium toys and elegant crockery designed to bring families together and create lasting memories.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-slate-300">
                <Mail className="w-4 h-4 mr-3 text-indigo-400" />
                <span>hello@playplates.com</span>
              </div>
              <div className="flex items-center text-sm text-slate-300">
                <Phone className="w-4 h-4 mr-3 text-indigo-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start text-sm text-slate-300">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-indigo-400 flex-shrink-0" />
                <span>1234 Business Plaza<br />New York, NY 10001</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', name: 'Twitter' },
                  { icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', name: 'LinkedIn' },
                  { icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z', name: 'Instagram' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    variants={socialVariants}
                    whileHover="hover"
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5 text-slate-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="flex items-center justify-between text-sm font-semibold text-slate-200 mb-6 uppercase tracking-wider lg:block">
              Quick Links
              <button
                className="lg:hidden"
                onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
                aria-label="Toggle quick links"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isQuickLinksOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            
            <ul className="hidden lg:block space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <AnimatePresence>
              {isQuickLinksOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="lg:hidden space-y-3 mt-4"
                >
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="flex items-center justify-between text-sm font-semibold text-slate-200 mb-6 uppercase tracking-wider lg:block">
              Customer Care
              <button
                className="lg:hidden"
                onClick={() => setIsHelpOpen(!isHelpOpen)}
                aria-label="Toggle help links"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isHelpOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            
            <ul className="hidden lg:block space-y-3">
              {helpLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <AnimatePresence>
              {isHelpOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="lg:hidden space-y-3 mt-4"
                >
                  {helpLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Legal & Company Info */}
          <div>
            <h3 className="flex items-center justify-between text-sm font-semibold text-slate-200 mb-6 uppercase tracking-wider lg:block">
              Legal & Policies
              <button
                className="lg:hidden"
                onClick={() => setIsInfoOpen(!isInfoOpen)}
                aria-label="Toggle legal links"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isInfoOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            
            <ul className="hidden lg:block space-y-3 mb-6">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <AnimatePresence>
              {isInfoOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="lg:hidden mt-4"
                >
                  <ul className="space-y-3 mb-6">
                    {legalLinks.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          className="text-slate-300 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Payment Methods & Newsletter */}
      <div className="border-t border-slate-700 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-6">
              <span className="text-sm font-medium text-slate-300">Secure Payments:</span>
              <div className="flex items-center space-x-3">
                {paymentIcons.map((payment, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-8 bg-white rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    {payment.icon}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-slate-300">Stay Updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-slate-700 text-white placeholder-slate-400 rounded-l-lg border border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors text-sm"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-r-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-slate-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-300">PlayPlates</span>. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <span>Made with ❤️ for families worldwide</span>
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-green-500 font-medium">SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
