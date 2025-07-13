import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Convert Google Drive link to direct download format
  const resumeLink = 'https://drive.google.com/uc?export=download&id=15tZj-yznPmAs8X993qLPJ7MvMq-uhwr9';

  return (
    <header className="bg-black/70 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 max-w-screen-xl flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-extrabold tracking-tight hover:text-blue-400 transition-all duration-300">
            Muhammad<span className="text-blue-400">Abdullah</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none transition-transform duration-300"
          >
            <motion.svg 
              className="h-8 w-8 fill-current"
              viewBox="0 0 24 24"
              initial={false}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isMenuOpen ? (
                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </motion.svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-lg font-medium">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              {item}
            </a>
          ))}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-300 text-sm font-semibold"
          >
            Download Resume
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-lg overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4 text-lg font-semibold">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="block hover:text-blue-400 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
