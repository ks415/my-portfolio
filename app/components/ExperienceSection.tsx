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
      logoColor: "#ffffffff",
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
      <div className="px-4 md:px-20 py-10 md:py-15 h-full min-h-screen">
        <div className="flex flex-col justify-center items-center gap-5 px-4 md:px-8 max-w-[1280px] mx-auto h-full">
          {/* Section Title */}
          <div className="flex justify-center items-center self-stretch gap-2 md:gap-4 py-5 mb-0">
            <span className="text-3xl md:text-5xl font-normal leading-[1.167] tracking-tight text-white">
              My
            </span>
            <span className="text-3xl md:text-5xl font-extrabold leading-[1.167] tracking-tight text-white">
              Experience
            </span>
          </div>

          {/* Experience Cards */}
          <div className="flex flex-col self-stretch gap-6 md:gap-8 py-8 md:py-10 px-0 md:px-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-4 md:p-8 px-4 md:px-6 rounded-xl border border-[#71717A] self-stretch gap-4 md:gap-7 flex flex-col transition-all duration-300 ${
                  exp.active ? "bg-[#27272A]" : "bg-black"
                }`}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center self-stretch gap-3 md:gap-47">
                  <div className="flex items-center self-stretch gap-4 md:gap-8 flex-1">
                    <div
                      className="w-6 h-6 md:w-8 md:h-8 rounded flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: exp.logoColor }}
                    >
                      {exp.hasCustomLogo ? (
                        <Image
                          src={`/${exp.logo}`}
                          alt={`${exp.company} logo`}
                          width={24}
                          height={24}
                          className="object-contain w-4 h-4 md:w-6 md:h-6"
                        />
                      ) : (
                        <i className={`${exp.logo} text-sm md:text-base`}></i>
                      )}
                    </div>
                    <div className="text-lg md:text-2xl font-semibold text-white leading-[1.167] tracking-tight">
                      {exp.isSchool
                        ? exp.company
                        : `${exp.role} at ${exp.company}`}
                    </div>
                  </div>
                  <div className="text-sm md:text-base font-semibold text-[#D4D4D8] leading-5 tracking-tight md:text-right">
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                {exp.description && (
                  <div className="text-sm md:text-base leading-6 text-[#D4D4D8] tracking-wider">
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
