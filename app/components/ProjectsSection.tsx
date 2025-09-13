"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  const projects = [
    {
      number: "01",
      title: "ノートアプリ",
      description:
        "ReactとExpressとPostgreSQLを使用したノートアプリケーション。ユーザー認証、CRUD操作、リアルタイム更新機能を実装。モダンなWebアプリケーション開発の技術を総合的に活用したプロジェクトです。",
      image: "/note-app.png",
      link: "#",
    },
    {
      number: "02",
      title: "fashion-checker(仮)",
      description:
        "FastAPIとFletを使用したファッション提案アプリケーション。所有している衣服の中からリアルタイムの天気に最適な服装を提案します。LLMとWebアプリケーションを組み合わせたプロジェクトです。",
      image: "/fashion-checker.png",
      link: "https://fashion-checker-frontend.onrender.com/",
    },
    {
      number: "03",
      title: "Personal Portfolio Website",
      description:
        "FigmaMCPと生成AIを活用して制作したNext.js製ポートフォリオサイト。Figmaデザインの忠実な再現とReactコンポーネント化により、モダンなWebアプリケーション開発手法を実践したプロジェクトです。",
      image: "/portfolio.png",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white min-h-screen scroll-mt-24"
    >
      <div className="px-4 md:px-20 py-10 md:py-15 flex flex-col h-full min-h-screen">
        <div className="flex flex-col gap-5 px-4 md:px-8 max-w-[1280px] mx-auto h-full justify-center w-full">
          {/* Section Title */}
          <div className="flex justify-center items-center self-stretch gap-2 md:gap-4 py-5 mb-0">
            <span className="text-3xl md:text-5xl font-normal leading-[1.167] tracking-tight text-white">
              My
            </span>
            <span className="text-3xl md:text-5xl font-extrabold leading-[1.167] tracking-tight text-white">
              Projects
            </span>
          </div>

          {/* Projects List */}
          <div className="flex flex-col gap-8 md:gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center self-stretch gap-6 md:gap-10 py-5 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image */}
                <div className="flex-1 w-full lg:max-w-[594px] flex items-center justify-center">
                  <div className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[530px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={530}
                      height={330}
                      className="w-full h-auto rounded-[18.76px] shadow-lg object-cover"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col gap-4 md:gap-7 justify-center text-center lg:text-left w-full">
                  <div className="text-3xl md:text-5xl font-extrabold text-white leading-[1.167] tracking-tight">
                    {project.number}
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-white leading-5 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base leading-6 text-[#71717A] tracking-wider">
                    {project.description}
                  </p>
                  {project.link !== "#" && (
                    <div className="flex justify-center lg:justify-start">
                      <Link
                        href={project.link}
                        className="flex items-center justify-center w-8 h-8 text-white no-underline text-lg transition-opacity hover:opacity-80 bg-white bg-opacity-10 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
