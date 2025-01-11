import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-8 w-auto" src={Logo} alt="KoinX" />
            </Link>
          </div>
          
          {/* Hamburger button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to="/crypto-taxes" className="text-gray-700 hover:text-gray-900">
              Crypto Taxes
            </Link>
            <Link to="/free-tools" className="text-gray-700 hover:text-gray-900">
              Free Tools
            </Link>
            <Link to="/resource-center" className="text-gray-700 hover:text-gray-900">
              Resource Center
            </Link>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/crypto-taxes"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Crypto Taxes
            </Link>
            <Link
              to="/free-tools"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Free Tools
            </Link>
            <Link
              to="/resource-center"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Resource Center
            </Link>
            <button className="w-full text-left px-3 py-2 text-base font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header; 