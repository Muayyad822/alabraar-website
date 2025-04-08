import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaBook, FaUserGraduate, FaEnvelope, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { MdMenu, MdClose } from 'react-icons/md';
import logo from '../assets/alabraar.png';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-white bg-blue-700 dark:bg-blue-800 px-3 py-2 rounded-lg font-medium"
      : "text-white hover:bg-blue-700 dark:hover:bg-blue-800 px-3 py-2 rounded-lg font-medium transition-colors duration-200";
  };

  // Desktop Navigation - Update the user profile section
  const userSection = user ? (
    <div className="relative group">
      <button className="flex items-center text-white hover:bg-blue-700 px-3 py-2 rounded-lg font-medium transition-colors duration-200">
        <FaUser className="inline mr-1" /> {user.name}
      </button>
      <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl hidden group-hover:block">
        <Link
          to="/profile"
          className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
        >
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
        >
          <FaSignOutAlt className="inline mr-2" /> Logout
        </button>
      </div>
    </div>
  ) : (
    <Link to="/login" className="text-white hover:bg-blue-700 px-3 py-2 rounded-lg font-medium transition-colors duration-200">
      <FaUser className="inline mr-1" /> Login
    </Link>
  );

  // Mobile Navigation - Update the user section
  const mobileuserSection = user ? (
    <>
      <Link 
        to="/profile" 
        className={`text-white text-lg py-3 px-4 rounded-lg ${location.pathname === '/profile' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
        onClick={() => setIsOpen(false)}
      >
        <FaUser className="inline mr-2" /> Profile
      </Link>
      <button 
        onClick={handleLogout}
        className="w-full text-left text-white text-lg py-3 px-4 rounded-lg hover:bg-red-700"
      >
        <FaSignOutAlt className="inline mr-2" /> Logout
      </button>
    </>
  ) : (
    <Link 
      to="/login" 
      className="text-white text-lg py-3 px-4 rounded-lg hover:bg-blue-700"
      onClick={() => setIsOpen(false)}
    >
      <FaUser className="inline mr-2" /> Login
    </Link>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-xl' : 'py-4'} bg-gradient-to-r from-blue-600 to-blue-800`}>
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
              Al-Abraar Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={getLinkClass("/")}>
              <FaHome className="inline mr-1" /> Home
            </Link>
            <Link to="/courses" className={getLinkClass("/courses")}>
              <FaBook className="inline mr-1" /> Courses
            </Link>
            <Link to="/admission" className={getLinkClass("/admission")}>
              <FaUserGraduate className="inline mr-1" /> Admission
            </Link>
            <Link to="/contact" className={getLinkClass("/enquiry")}>
              <FaEnvelope className="inline mr-1" /> Make an Enquiry
            </Link>
            {userSection}
            {user && user.role === 'admin' && (
              <Link
                to="/admin"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Admin Dashboard
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
                AlAbraar Foundation
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
                to="/enquiry" 
                className={`text-white text-lg py-3 px-4 rounded-lg ${location.pathname === '/contact' ? 'bg-blue-700 dark:bg-blue-800' : 'hover:bg-blue-700 dark:hover:bg-blue-800'}`}
                onClick={() => setIsOpen(false)}
              >
                <FaEnvelope className="inline mr-2" /> Make an Enquiry
              </Link>
              
              {/* Updated User Profile/Login Button in mobile menu */}
              {mobileuserSection}
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
