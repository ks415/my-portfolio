"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1440px] mx-auto px-20 py-6">
        <div className="max-w-[1280px] mx-auto px-8 flex justify-between items-center">
          <Link
            href="https://my-portfolio-eta-hazel.vercel.app/"
            className="flex items-center gap-3 text-xl font-bold text-black no-underline"
          >
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">
              <i className="fas fa-user"></i>
            </div>
            ks415
          </Link>
          <nav className="flex gap-8 items-center justify-center">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
