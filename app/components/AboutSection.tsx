"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white min-h-screen scroll-mt-24">
      <div className="w-[1440px] mx-auto px-20 py-15 flex justify-center items-center h-full min-h-screen">
        <div className="flex justify-between items-center px-8 w-[1280px]">
          <div className="flex-shrink-0 w-[525.45px] h-[572px]">
            <Image
              src="/about-character.png"
              alt="About Me Character"
              width={525}
              height={572}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-5 h-[572px] w-[610px]">
            <div className="flex self-stretch gap-4 py-5">
              <span className="text-5xl font-normal leading-[1.167] tracking-tight">
                About
              </span>
              <span className="text-5xl font-extrabold leading-[1.167] tracking-tight">
                Me
              </span>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <p className="text-base leading-6 text-[#71717A] tracking-wider">
                大阪公立大学大学院 M1 知能メディア処理研究室所属。
                画像認識の研究に従事しており、特にVision-Language
                Modelに興味があります。
                マルチモーダル学習やFew-shot学習などの技術を研究しています。
              </p>
              <p className="text-base leading-6 text-[#71717A] tracking-wider">
                プログラミングを始めたのは大学1年生の時で、それ以来継続的に学習を続けています。
                現在はWebアプリケーション開発にも取り組んでおり、React、Next.js、TypeScript、FastAPI、PostgreSQLなどの
                モダンな技術スタックを使用してフルスタックでの開発を行っています。
              </p>
              <p className="text-base leading-6 text-[#71717A] tracking-wider">
                研究以外の時間は、新しい技術の学習やWebアプリケーションの開発などを行っています。2025年2月からはAthena TechnologiesでAIエンジニアとしてAIの社会実装に携わっています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
