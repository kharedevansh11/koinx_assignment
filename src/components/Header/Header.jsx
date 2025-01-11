import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-8 w-auto" src={Logo} alt="KoinX" />
            </Link>
          </div>
          
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
      </div>
    </nav>
  );
};

export default Header; 