import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-3xl tracking-tight animated-text">
          Cameron
        </span>
        <div className="animated-star ml-2"></div>
      </div>
      <div>
        <Link to="/what-i-do" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:bg-white hover:text-gray-800 mt-4 lg:mt-0">
          What I do
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;