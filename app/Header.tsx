"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link 
          href="/" 
          className="text-gray-600 hover:text-gray-900 transition-colors font-bold text-xl"
        >
          ks415
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">HOME</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">ABOUT</Link>
          <Link href="/#works" className="text-gray-600 hover:text-gray-900 transition-colors">WORKS</Link>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;