"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white min-h-screen scroll-mt-24">
      <div className="px-4 md:px-20 py-10 md:py-15 flex justify-center items-center h-full min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 w-full max-w-[1280px] gap-8 md:gap-12">
          {/* Character Image */}
          <div className="flex-shrink-0 w-full md:w-[400px] lg:w-[425px] order-2 md:order-1">
            <Image
              src="/about-character.png"
              alt="About Me Character"
              width={425}
              height={572}
              className="w-full h-auto object-contain max-h-[300px] md:max-h-[400px] lg:max-h-[572px]"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-5 w-full md:w-[450px] lg:w-[610px] order-1 md:order-2">
            {/* Section Title */}
            <div className="flex justify-center md:justify-start self-stretch gap-2 md:gap-4 py-5">
              <span className="text-3xl md:text-5xl font-normal leading-[1.167] tracking-tight">
                About
              </span>
              <span className="text-3xl md:text-5xl font-extrabold leading-[1.167] tracking-tight">
                Me
              </span>
            </div>

            {/* About Content */}
            <div className="flex flex-col justify-center gap-4 md:gap-5 text-center md:text-left">
              <p className="text-sm md:text-base leading-6 text-[#71717A] tracking-wider">
                大阪公立大学大学院 M1 知能メディア処理研究室所属。
                画像認識の研究に従事しており、特にVision-Language
                Modelに興味があります。
                マルチモーダル学習やFew-shot学習などの技術を研究しています。
              </p>
              <p className="text-sm md:text-base leading-6 text-[#71717A] tracking-wider">
                プログラミングを始めたのは大学1年生の時で、それ以来継続的に学習を続けています。
                現在はWebアプリケーション開発にも取り組んでおり、React、Next.js、TypeScript、FastAPI、PostgreSQLなどの
                モダンな技術スタックを使用してフルスタックでの開発を行っています。
              </p>
              <p className="text-sm md:text-base leading-6 text-[#71717A] tracking-wider">
                研究以外の時間は、新しい技術の学習やWebアプリケーションの開発などを行っています。2026年1月から株式会社松尾研究所でMLエンジニアとしてAIの社会実装に携わっています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
