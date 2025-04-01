import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaUserGraduate, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { MdMenu, MdClose } from 'react-icons/md';
import logo from '../assets/alabraar.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, ] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-white bg-blue-700 dark:bg-blue-800 px-3 py-2 rounded-lg font-medium"
      : "text-white hover:bg-blue-700 dark:hover:bg-blue-800 px-3 py-2 rounded-lg font-medium transition-colors duration-200";
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-xl' : 'py-4'} ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-600 to-blue-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center justify-center bg-white w-10 h-10 rounded-full">
              {/* <span className="text-blue-600 text-xl font-bold">أ</span> */}
              <img src={logo} alt="alabraar logo" />
            </div>
            <span className="text-white text-xl font-bold hidden sm:block">
              AlAbraar Islamic Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className={getLinkClass("/")}>
              <FaHome className="inline mr-1" /> Home
            </Link>
            <Link to="/courses" className={getLinkClass("/courses")}>
              <FaBook className="inline mr-1" /> Courses
            </Link>
            <Link to="/admission" className={getLinkClass("/admission")}>
              <FaUserGraduate className="inline mr-1" /> Admission
            </Link>
            <Link to="/contact" className={getLinkClass("/contact")}>
              <FaEnvelope className="inline mr-1" /> Contact
            </Link>
            
            {/* Dark Mode Toggle */}
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full text-white hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="mr-4 p-2 rounded-full text-white hover:bg-blue-700 transition-colors duration-200"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button> */}
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-75 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 shadow-xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-blue-500 dark:border-gray-700">
              <Link 
                to="/" 
                className="text-white text-xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                AlAbraar Islamic Foundation
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 rounded-full hover:bg-blue-700 dark:hover:bg-gray-700"
                aria-label="Close menu"
              >
                <MdClose size={24} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-4 p-6 overflow-y-auto">
              <Link 
                to="/" 
                className={`text-white text-lg py-3 px-4 rounded-lg ${location.pathname === '/' ? 'bg-blue-700 dark:bg-blue-800' : 'hover:bg-blue-700 dark:hover:bg-blue-800'}`}
                onClick={() => setIsOpen(false)}
              >
                <FaHome className="inline mr-2" /> Home
              </Link>
              <Link 
                to="/courses" 
                className={`text-white text-lg py-3 px-4 rounded-lg ${location.pathname === '/courses' ? 'bg-blue-700 dark:bg-blue-800' : 'hover:bg-blue-700 dark:hover:bg-blue-800'}`}
                onClick={() => setIsOpen(false)}
              >
                <FaBook className="inline mr-2" /> Courses
              </Link>
              <Link 
                to="/admission" 
                className={`text-white text-lg py-3 px-4 rounded-lg ${location.pathname === '/admission' ? 'bg-blue-700 dark:bg-blue-800' : 'hover:bg-blue-700 dark:hover:bg-blue-800'}`}
                onClick={() => setIsOpen(false)}
              >
                <FaUserGraduate className="inline mr-2" /> Admission
              </Link>
              <Link 
                to="/contact" 
                className={`text-white text-lg py-3 px-4 rounded-lg ${location.pathname === '/contact' ? 'bg-blue-700 dark:bg-blue-800' : 'hover:bg-blue-700 dark:hover:bg-blue-800'}`}
                onClick={() => setIsOpen(false)}
              >
                <FaEnvelope className="inline mr-2" /> Contact
              </Link>
            </div>
            
            <div className="mt-auto p-6 border-t border-blue-500 dark:border-gray-700">
              <div className="text-white text-center">
                <p className="mb-2">Need help?</p>
                <a 
                  href="mailto:info@alabraar.edu" 
                  className="text-blue-200 hover:text-white font-medium"
                >
                  info@alabraar.edu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;