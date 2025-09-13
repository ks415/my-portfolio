"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-20 py-15 h-full">
        {/* Social Buttons */}
        <div className="absolute top-[560px] left-[148px] flex gap-8 py-1">
          <a
            href="https://github.com/ks415"
            className="w-14 h-14 rounded border-0 flex items-center justify-center text-white no-underline text-xl transition-transform hover:-translate-y-1 p-4 bg-black"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://qiita.com/ks415"
            className="w-14 h-14 rounded border-0 flex items-center justify-center text-black no-underline text-xl transition-transform hover:-translate-y-1 p-4 bg-white border-2 border-black"
          >
            <img src="/qiita-icon.png" alt="Qiita" className="w-5 h-5" />
          </a>
        </div>

        <div className="max-w-[1280px] mx-auto px-8 flex justify-between items-center h-full min-h-[600px]">
          <div className="flex-1 max-w-[600px] py-5 flex flex-col gap-12">
            <div className="flex flex-col gap-5 self-stretch">
              <div className="flex gap-4 items-center">
                <span className="text-5xl leading-[1.167] tracking-tight font-normal">
                  Hello I&apos;am
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-5xl leading-[1.167] tracking-tight font-extrabold">
                  So Kawagoe.
                </span>
              </div>
            </div>
            <p className="text-base leading-6 text-[#71717A] tracking-wider self-stretch">
              大阪公立大学大学院 <br />
              M1 知能メディア処理研究室所属<br />
              画像認識の研究に従事しており、特にVision-Language
              Modelに興味があります。
              Webアプリケーション開発にも取り組んでおり、React、Next.js、FastAPIなどの技術を使用しています。
            </p>
          </div>
          <div className="flex-shrink-0 max-w-[889px] flex justify-center items-end">
            <Image
              src="/hero-character.png"
              alt="Computer Vision Researcher Character"
              width={889}
              height={596}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
