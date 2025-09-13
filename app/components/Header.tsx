"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="px-4 md:px-20 py-4 md:py-6">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-3 text-xl font-bold text-black no-underline"
          >
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">
              <i className="fas fa-user"></i>
            </div>
            <span>ks415</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center justify-center">
            <Link
              href="#about"
              className="text-xl font-semibold text-black no-underline uppercase tracking-tight hover:text-gray-600 transition-colors"
            >
              About Me
            </Link>
            <Link
              href="#skills"
              className="text-xl font-semibold text-black no-underline uppercase tracking-tight hover:text-gray-600 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-xl font-semibold text-black no-underline uppercase tracking-tight hover:text-gray-600 transition-colors"
            >
              Project
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="#about"
                className="text-lg font-semibold text-black no-underline uppercase tracking-tight hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
              <Link
                href="#skills"
                className="text-lg font-semibold text-black no-underline uppercase tracking-tight hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-lg font-semibold text-black no-underline uppercase tracking-tight hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
