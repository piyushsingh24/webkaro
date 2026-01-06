import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* 🔹 MOBILE HAMBURGER (TOP RIGHT) */}
      <button
        onClick={() => setMobileMenuOpen(prev => !prev)}
        className="md:hidden fixed top-2 right-4 z-[60]
                   w-11 h-11 flex items-center justify-center
                   rounded-full bg-white dark:bg-navy
                   shadow-lg
                   text-secondary-900 dark:text-white"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 🔹 DESKTOP BOTTOM NAVBAR */}
      <nav
        className={`hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50
        w-[95%] max-w-xl rounded-full border border-border-color
        transition-all duration-300
        ${scrolled
            ? 'bg-white/80 dark:bg-navy/80 backdrop-blur-md shadow-2xl'
            : 'bg-white dark:bg-navy shadow-xl'
          }`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-300
                ${location.pathname === link.path
                    ? 'text-primary-600 dark:text-cyan'
                    : 'text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-cyan hover:scale-110'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 🔹 MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 z-50
                       w-[90%] max-w-sm rounded-2xl
                       bg-white dark:bg-navy
                       border border-border-color shadow-2xl"
          >
            <div className="flex flex-col divide-y divide-border-color">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-4 text-center font-medium transition
                  ${location.pathname === link.path
                      ? 'text-primary-600 dark:text-cyan'
                      : 'text-secondary-700 dark:text-secondary-300 hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
