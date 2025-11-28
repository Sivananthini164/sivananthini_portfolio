// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // initialize on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // SVG circle setup
  const size = 100;         // viewBox size
  const strokeWidth = 4;    // stroke width of the animated line
  const radius = 46;        // circle radius (keep margin for stroke)
  const circumference = 2 * Math.PI * radius;

  // helper classes depending on scroll state
  const logoTextClass = scrolled ? 'text-4xl font-bold text-gray-800 italic' : 'text-4xl font-bold text-white italic';
  const navLinkBase = 'font-bold text-2xl transition-colors relative';
  const navLinkColorClass = scrolled ? 'text-blue-900 hover:text-blue-400' : 'text-white hover:text-blue-200';
  const hamburgerBarColor = scrolled ? 'bg-gray-800' : 'bg-white';

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">

            {/* Logo with Profile Image + animated border */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              {/* wrapper to position svg overlay */}
              <div className="relative w-14 h-14">
                {/* the photo */}
                <img
                  src="./assets/frontface.png" 
                  alt="Profile"
                  className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-xl"
                  style={{ imageRendering: 'auto' }}
                />

                {/* animated SVG overlay */}
                <svg
                  viewBox={`0 0 ${size} ${size}`}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <defs>
                    {/* gradient used when scrolled (visible on white bg) */}
                    <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#01040aff" />
                      <stop offset="100%" stopColor="#bdbae1ff" />
                    </linearGradient>
                  </defs>

                  <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    // use the gradient when scrolled, otherwise white (so it's visible over the dark video)
                    stroke={scrolled ? 'url(#strokeGrad)' : '#ffffff'}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    animate={{ strokeDashoffset: [circumference, 0, circumference] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 2.2,
                      ease: 'linear',
                    }}
                  />
                </svg>
              </div>

              <span className={logoTextClass}>
                Sivananthini
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`${navLinkBase} ${navLinkColorClass}`}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} hover:w-full`}></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 ${hamburgerBarColor} transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                />
                <span
                  className={`w-full h-0.5 ${hamburgerBarColor} transition-all ${isOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`w-full h-0.5 ${hamburgerBarColor} transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed top-0 right-0 w-64 sm:w-80 max-w-xs h-full 
                       bg-white/95 backdrop-blur-md z-40 md:hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 mt-16 space-y-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-2xl font-bold text-blue-900 hover:text-blue-400 transition-colors relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
