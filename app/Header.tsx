"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 shadow-md z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-900 transition-colors font-bold text-xl"
          >
            ks415
          </Link>

          {/* ハンバーガーメニューボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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

          {/* デスクトップメニュー */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">HOME</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">ABOUT</Link>
            <Link href="/#works" className="text-gray-600 hover:text-gray-900 transition-colors">WORKS</Link>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">CONTACT</a>
          </nav>
        </div>

        {/* モバイルメニュー */}
        <nav className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 py-4">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/#works" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              WORKS
            </Link>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;