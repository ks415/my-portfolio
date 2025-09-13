"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="px-4 md:px-20 py-4 md:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 max-w-[1280px] mx-auto gap-4 md:gap-0">
          <Link
            href="#"
            className="flex items-center gap-3 text-white no-underline"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center text-black">
              <i className="fas fa-user text-sm md:text-base"></i>
            </div>
            <span className="text-lg md:text-xl font-bold">ks415</span>
          </Link>
          <div className="flex flex-col items-center md:items-end gap-1 md:gap-3">
            <div className="text-sm md:text-base font-semibold text-white leading-5 tracking-tight">
              @ 2025 So Kawagoe
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
