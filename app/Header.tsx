import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-gray-800 text-2xl font-bold">ks415</div>
        <nav className="space-x-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">ABOUT</a>
          <a href="#works" className="text-gray-600 hover:text-gray-900 transition-colors">WORKS</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;