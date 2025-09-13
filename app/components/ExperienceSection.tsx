"use client";

import React from "react";
import Image from "next/image";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Athena Technologies",
      role: "AI Engineer",
      period: "Feb 2025 - Present",
      logo: "AthenaTechnologies.png",
      logoColor: "#4285F4",
      description:
        "AI Engineerとして、機械学習とディープラーニング技術を活用したソリューションの開発に従事しています。",
      active: true,
      isSchool: false,
      hasCustomLogo: true,
    },
    {
      company: "大阪公立大学大学院",
      period: "Apr 2025 - Present",
      logo: "fas fa-university",
      logoColor: "#283544",
      description:
        "知能メディア処理研究室に所属し、Vision-Language Modelの研究に従事。マルチモーダル学習やFew-shot学習などの技術を研究しています。",
      active: true,
      isSchool: true,
    },
    {
      company: "大阪府立大学",
      role: "工学域 電気電子系学類 情報工学課程",
      period: "Apr 2021 - Mar 2025",
      logo: "fas fa-graduation-cap",
      logoColor: "#283544",
      description:
        "情報工学を専攻し、プログラミング基礎から機械学習、画像処理まで幅広く学習。卒業研究では画像認識モデルCLIPを用いた研究を行いました。",
      active: false,
      isSchool: true,
    },
    {
      company: "愛知県立岡崎高等学校",
      role: "普通科",
      period: "Apr 2017 - Mar 2020",
      logo: "fas fa-school",
      logoColor: "#283544",
      active: false,
      isSchool: true,
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-20 py-15 h-full min-h-screen">
        <div className="flex flex-col justify-center items-center gap-5 px-8 max-w-[1280px] mx-auto h-full">
          <div className="flex justify-center items-center self-stretch gap-4 py-5 mb-0">
            <span className="text-5xl font-normal leading-[1.167] tracking-tight text-white">
              My
            </span>
            <span className="text-5xl font-extrabold leading-[1.167] tracking-tight text-white">
              Experience
            </span>
          </div>
          <div className="flex flex-col self-stretch gap-8 py-10 px-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-8 px-6 rounded-xl border border-[#71717A] self-stretch gap-7 flex flex-col transition-all duration-300 ${
                  exp.active ? "bg-[#27272A]" : "bg-black"
                }`}
              >
                <div className="flex justify-between items-center self-stretch gap-47">
                  <div className="flex items-center self-stretch gap-8 w-[1018px]">
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center text-white"
                      style={{ backgroundColor: exp.logoColor }}
                    >
                      {exp.hasCustomLogo ? (
                        <Image
                          src={`/${exp.logo}`}
                          alt={`${exp.company} logo`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      ) : (
                        <i className={exp.logo}></i>
                      )}
                    </div>
                    <div className="text-2xl font-semibold text-white leading-[1.167] tracking-tight text-center">
                      {exp.isSchool
                        ? exp.company
                        : `${exp.role} at ${exp.company}`}
                    </div>
                  </div>
                  <div className="text-base font-semibold text-[#D4D4D8] leading-5 tracking-tight text-right">
                    {exp.period}
                  </div>
                </div>
                <div className="text-base leading-6 text-[#D4D4D8] tracking-wider">
                  {exp.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
