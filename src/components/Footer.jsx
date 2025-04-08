import { FaEnvelope, FaInstagram, FaFacebook, FaYoutube, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Al-Abraar Foundation</h3>
            <p className="text-gray-300 mb-4">
              Providing authentic Islamic education through structured online programs in Quranic studies, Arabic language, and Islamic sciences.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/alabraarfoundation_" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 flex-shrink-0 text-blue-400" />
                <a href="mailto:foundationalabraar@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  foundationalabraar@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="mt-1 mr-3 flex-shrink-0 text-blue-400" />
                <span className="text-gray-300">+234 816 489 0387</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-blue-400" />
                <span className="text-gray-300">Virtual Online School</span>
              </li>
            </ul>
          </div>

    {/* Quick Links */}
    <div>
        <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
        <ul className="space-y-2">
            <li><a href="/courses" className="text-gray-300 hover:text-white transition-colors">Our Courses</a></li>
            <li><a href="/admission" className="text-gray-300 hover:text-white transition-colors">Admission</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
        </ul>
    </div>
    </div>

    {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright and Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Al-Abraar Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
