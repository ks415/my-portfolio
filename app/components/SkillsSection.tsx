"use client";

import React from "react";
import Image from "next/image";

const SkillsSection = () => {
  const skills = [
    { icon: "fab fa-python", name: "Python", active: true },
    { icon: "fas fa-fire", name: "PyTorch", active: false },
    { icon: "fab fa-react", name: "React", active: false },
    { icon: "fas fa-brain", name: "Deep Learning", active: false },
    { icon: "fas fa-eye", name: "Computer Vision", active: false },
    { icon: "fab fa-git-alt", name: "Git", active: false },
    { icon: "fab fa-aws", name: "AWS", active: false },
    { icon: "fab fa-docker", name: "Docker", active: false },
    { icon: "fab fa-js-square", name: "JavaScript", active: false },
    { icon: "fab fa-node-js", name: "Node.js", active: false },
  ];

  return (
    <section id="skills" className="bg-white min-h-screen scroll-mt-24">
      <div className="px-4 md:px-20 py-10 md:py-15 flex flex-col justify-center items-center h-full min-h-screen">
        <div className="flex flex-col gap-5 px-4 md:px-8 max-w-[1280px] w-full">
          {/* Section Title */}
          <div className="flex justify-center items-center self-stretch gap-2 md:gap-4 py-5 mb-0">
            <span className="text-3xl md:text-5xl font-normal leading-[1.167] tracking-tight">
              My
            </span>
            <span className="text-3xl md:text-5xl font-extrabold leading-[1.167] tracking-tight">
              Skills
            </span>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-col items-center self-stretch py-5">
            {/* Mobile: Single column grid */}
            <div className="grid grid-cols-2 md:hidden gap-4 w-full max-w-md">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center gap-4 p-4 border-2 border-black rounded w-full h-32 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    skill.active ? "bg-black text-white" : "bg-white"
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center text-xl">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="text-sm font-bold text-center leading-tight tracking-tight">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet: 3 columns grid */}
            <div className="hidden md:grid lg:hidden grid-cols-3 gap-5 w-full">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center gap-6 p-5 border-2 border-black rounded w-full h-40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    skill.active ? "bg-black text-white" : "bg-white"
                  }`}
                >
                  <div className="w-10 h-10 flex items-center justify-center text-2xl">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="text-lg font-bold text-center leading-tight tracking-tight">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Original 2-row layout */}
            <div className="hidden lg:flex flex-col gap-5 w-full">
              <div className="flex justify-between items-center self-stretch">
                {skills.slice(0, 5).map((skill, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center gap-8 p-6 border-2 border-black rounded w-[186px] h-[186px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      skill.active ? "bg-black text-white" : "bg-white"
                    }`}
                  >
                    <div className="w-14 h-14 flex items-center justify-center text-3xl">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="text-xl font-bold text-center leading-tight tracking-tight">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center self-stretch">
                {skills.slice(5, 10).map((skill, index) => (
                  <div
                    key={index + 5}
                    className={`flex flex-col items-center justify-center gap-8 p-6 border-2 border-black rounded w-[186px] h-[186px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      skill.active ? "bg-black text-white" : "bg-white"
                    }`}
                  >
                    <div className="w-14 h-14 flex items-center justify-center text-3xl">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="text-xl font-bold text-center leading-tight tracking-tight">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Certifications
              </h3>
            </div>

            <div className="w-full">
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 p-4 sm:p-5 border-2 border-black rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink-0">
                  <Image
                    src="/e-shikaku-2025-2.png"
                    alt="JDLA E資格 2025 #2 ロゴ"
                    fill
                    sizes="(min-width:768px) 160px, (min-width:640px) 128px, 112px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-lg md:text-xl font-bold leading-tight">
                    JDLA Deep Learning for ENGINEER（E資格）
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-snug">
                    発行元: 一般社団法人 日本ディープラーニング協会（JDLA） /
                    2025-09
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
