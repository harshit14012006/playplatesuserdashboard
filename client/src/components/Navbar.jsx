import { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  // Memoized navigation data
  const centerLinks = useMemo(() => [
    { name: 'Home', path: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'About', path: '/about', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Toys', path: '/toys', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4' },
    { name: 'Crockery', path: '/crockery', icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' },
    { name: 'Contact Us', path: '/contact', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ], []);

  const rightIcons = useMemo(() => [
    { 
      name: 'Cart', 
      path: '/cart',
      badge: '2',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 5M7 13l-1.5 5m0 0h9'
    },
    { 
      name: 'Login', 
      path: '/login',
      icon: 'M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
    },
    { 
      name: 'Sign Up', 
      path: '/signup',
      icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
      highlight: true
    },
  ], []);

  // Optimized toggle handler
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Check if current path is active
  const isActiveLink = useCallback((path) => {
    return location.pathname === path;
  }, [location.pathname]);

  // Animation variants with reduced motion support
  const navbarVariants = {
    hidden: { y: prefersReducedMotion ? 0 : -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: prefersReducedMotion ? 0.3 : 0.8, 
        ease: [0.23, 1, 0.32, 1] 
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      y: prefersReducedMotion ? 0 : -30, 
      opacity: 0, 
      scale: prefersReducedMotion ? 1 : 0.95 
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: prefersReducedMotion ? 0.2 : 0.4, 
        ease: [0.4, 0, 0.2, 1] 
      }
    },
    exit: { 
      y: prefersReducedMotion ? 0 : -30, 
      opacity: 0, 
      scale: prefersReducedMotion ? 1 : 0.95,
      transition: { duration: 0.3 }
    }
  };

  const linkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : i * 0.05,
        duration: prefersReducedMotion ? 0.2 : 0.3
      }
    })
  };

  return (
    <>
      {/* Background overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[92%] max-w-7xl bg-white/85 backdrop-blur-2xl border border-slate-200/60 rounded-3xl shadow-lg shadow-slate-900/5 px-6 sm:px-10 py-4 flex justify-between items-center z-50 text-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/10"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Enhanced Logo with micro-interactions */}
        <Link
          to="/"
          className="flex items-center space-x-1 group relative"
          aria-label="PlayPlates Home"
          onClick={closeMenu}
        >
          {/* Logo background glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <motion.div 
            className="relative"
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:via-purple-700 group-hover:to-indigo-900 transition-all duration-300">
              Play
            </div>
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300"></div>
          </motion.div>
          <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent group-hover:from-slate-700 group-hover:to-slate-900 transition-all duration-300">
            Plates
          </span>
        </Link>

        {/* Enhanced Center Links (Desktop) */}
        <div className="hidden mx-auto space-x-2 lg:space-x-4 text-sm font-semibold tracking-wide md:flex">
          {centerLinks.map((link, index) => {
            const isActive = isActiveLink(link.path);
            return (
              <motion.div
                key={link.name}
                whileHover={prefersReducedMotion ? {} : { y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="relative group"
              >
                <Link
                  to={link.path}
                  className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'text-indigo-600 bg-indigo-50/80 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/80'
                  }`}
                  onClick={closeMenu}
                >
                  {/* Icon for active state */}
                  {isActive && (
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                    </svg>
                  )}
                  
                  <span>{link.name}</span>
                  
                  {/* Enhanced active indicator */}
                  {isActive ? (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/2 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transform -translate-x-1/2"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  ) : (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-8 transform -translate-x-1/2 transition-all duration-300 rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Right Icons (Desktop) */}
        <div className="items-center hidden space-x-3 md:flex">
          {rightIcons.map((link, index) => {
            const isActive = isActiveLink(link.path);
            return (
              <motion.div
                key={link.name}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -1 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="relative"
              >
                <Link
                  to={link.path}
                  className={`relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 group ${
                    link.highlight
                      ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      : isActive
                        ? 'text-indigo-600 bg-indigo-50/80 shadow-sm'
                        : 'text-slate-600 hover:text-indigo-600 bg-slate-50/50 hover:bg-white/80 hover:shadow-lg hover:shadow-indigo-500/10'
                  }`}
                  title={link.name}
                  onClick={closeMenu}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                  
                  {/* Badge for cart */}
                  {link.badge && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
                    >
                      {link.badge}
                    </motion.span>
                  )}
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                    link.highlight ? 'bg-white' : 'bg-gradient-to-r from-indigo-500 to-purple-600'
                  }`}></div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            onClick={toggleMenu}
            className="flex items-center justify-center w-11 h-11 text-slate-600 hover:text-slate-900 bg-slate-50/50 hover:bg-white/80 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:ring-offset-2"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[94%] bg-white/95 backdrop-blur-2xl border border-slate-200/60 rounded-3xl shadow-2xl shadow-slate-900/15 p-6 z-50 flex flex-col"
              role="menu"
              aria-orientation="vertical"
            >
              {/* Mobile Navigation Links */}
              <div className="space-y-1 mb-6">
                {centerLinks.map((link, i) => {
                  const isActive = isActiveLink(link.path);
                  return (
                    <motion.div
                      key={link.name}
                      custom={i}
                      variants={linkItemVariants}
                      initial="hidden"
                      animate="visible"
                      role="none"
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`flex items-center space-x-3 px-4 py-3.5 text-base font-semibold rounded-2xl transition-all duration-300 group ${
                          isActive
                            ? 'text-indigo-600 bg-indigo-50/80 shadow-sm'
                            : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50/80'
                        }`}
                        role="menuitem"
                      >
                        {/* Mobile link icons */}
                        <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'bg-indigo-100 text-indigo-600' 
                            : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                        }`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                          </svg>
                        </div>
                        
                        <span className="relative">
                          {link.name}
                          {/* Active indicator for mobile */}
                          {isActive && (
                            <motion.div
                              layoutId="mobileActiveTab"
                              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                            />
                          )}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Enhanced Mobile Action Icons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: prefersReducedMotion ? 0 : centerLinks.length * 0.05 + 0.1 }}
                className="flex justify-center gap-4 pt-6 border-t border-slate-200/60"
              >
                {rightIcons.map((link, i) => {
                  const isActive = isActiveLink(link.path);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: prefersReducedMotion ? 0 : centerLinks.length * 0.05 + 0.2 + i * 0.05 
                      }}
                      whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                      className="relative"
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`flex flex-col items-center justify-center w-20 h-20 rounded-3xl transition-all duration-300 group ${
                          link.highlight
                            ? 'text-white bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg hover:shadow-xl'
                            : isActive
                              ? 'text-indigo-600 bg-indigo-50/80 shadow-sm'
                              : 'text-slate-600 hover:text-indigo-600 bg-slate-50/50 hover:bg-white/80 hover:shadow-lg'
                        }`}
                        role="menuitem"
                      >
                        <div className="relative">
                          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                          </svg>
                          
                          {/* Mobile badge */}
                          {link.badge && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
                            >
                              {link.badge}
                            </motion.span>
                          )}
                        </div>
                        
                        <span className="text-xs font-semibold transition-colors duration-200">
                          {link.name}
                        </span>
                        
                        {/* Mobile hover effect */}
                        <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                          link.highlight ? 'bg-white' : 'bg-gradient-to-r from-indigo-500 to-purple-600'
                        }`}></div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 0.8s ease-in-out;
        }
      `}</style>
    </>
  );
}
