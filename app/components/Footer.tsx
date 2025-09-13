"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-6">
        <div className="flex justify-between items-center px-8 max-w-[1280px] mx-auto">
          <Link
            href="#"
            className="flex items-center gap-3 text-white no-underline"
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black">
              <i className="fas fa-user"></i>
            </div>
            ks415
          </Link>
          <div className="flex flex-col items-end gap-3">
            <div className="text-base font-semibold text-white leading-5 tracking-tight">
              @ 2025 So Kawagoe
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
