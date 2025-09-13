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
      <div className="max-w-[1440px] mx-auto px-20 py-15 flex flex-col h-full min-h-screen">
        <div className="flex flex-col gap-5 px-8 max-w-[1280px] mx-auto h-full justify-center">
          <div className="flex justify-center items-center self-stretch gap-4 py-5 mb-0">
            <span className="text-5xl font-normal leading-[1.167] tracking-tight text-white">
              My
            </span>
            <span className="text-5xl font-extrabold leading-[1.167] tracking-tight text-white">
              Projects
            </span>
          </div>

          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex items-center self-stretch gap-10 py-5 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 max-w-[594px] h-[476px] flex items-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={530}
                  height={330}
                  className="w-[530px] h-[330px] rounded-[18.76px] shadow-lg object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-7 justify-center">
                <div className="text-5xl font-extrabold text-white leading-[1.167] tracking-tight">
                  {project.number}
                </div>
                <h3 className="text-3xl font-bold text-white leading-5 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-base leading-6 text-[#71717A] tracking-wider">
                  {project.description}
                </p>
                {project.link !== "#" && (
                  <Link
                    href={project.link}
                    className="flex items-center justify-center w-5 h-5 text-white no-underline text-base transition-opacity hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
