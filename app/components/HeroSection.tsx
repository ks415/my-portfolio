"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-screen">
      <div className="px-4 md:px-20 py-8 md:py-15 h-full">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center h-full min-h-[600px] gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-full md:max-w-[600px] py-5 flex flex-col gap-8 md:gap-12 text-center md:text-left">
            <div className="flex flex-col gap-3 md:gap-5 self-stretch">
              <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center md:justify-start">
                <span className="text-3xl md:text-5xl leading-[1.167] tracking-tight font-normal">
                  Hello I&apos;am
                </span>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center md:justify-start">
                <span className="text-3xl md:text-5xl leading-[1.167] tracking-tight font-extrabold">
                  川越壮 - So Kawagoe.
                </span>
              </div>
            </div>
            <p className="text-sm md:text-base leading-6 text-[#71717A] tracking-wider self-stretch">
              大阪公立大学大学院 <br />
              M1 知能メディア処理研究室所属
              <br />
              画像認識の研究に従事しており、特にVision-Language
              Modelに興味があります。
              Webアプリケーション開発にも取り組んでおり、React、Next.js、FastAPIなどの技術を使用しています。
            </p>

            {/* Social Buttons - Follow text alignment (center on mobile, left on md+) */}
            <div className="flex gap-6 py-1 justify-center md:justify-start">
              <a
                href="https://github.com/ks415"
                className="w-12 h-12 md:w-14 md:h-14 rounded border-0 flex items-center justify-center text-white no-underline text-lg transition-transform hover:-translate-y-1 p-3 md:p-4 bg-black"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ks415"
                className="w-12 h-12 md:w-14 md:h-14 rounded border-0 flex items-center justify-center text-white no-underline text-lg transition-transform hover:-translate-y-1 p-3 md:p-4 bg-[#0077B5]"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://qiita.com/ks415"
                className="w-12 h-12 md:w-14 md:h-14 rounded border-0 flex items-center justify-center text-black no-underline text-lg transition-transform hover:-translate-y-1 p-3 md:p-4 bg-white border-2 border-black"
              >
                <img
                  src="/qiita-icon.png"
                  alt="Qiita"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </a>
            </div>
          </div>

          {/* Character Image */}
          <div className="flex-shrink-0 w-full md:max-w-[400px] lg:max-w-[600px] xl:max-w-[729px] flex justify-center items-end">
            <Image
              src="/hero-character.png"
              alt="Computer Vision Researcher Character"
              width={729}
              height={596}
              className="w-full h-auto object-contain max-h-[300px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[596px]"
            />
          </div>
        </div>

        {/* Social Buttons moved inside text area above for consistent alignment */}
      </div>
    </section>
  );
};

export default HeroSection;
