import React from 'react';
import Header from '../Header';

const AboutPage = () => {
  return (
    <div className="bg-white pt-[72px]">
      <Header />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-center text-black mb-8">About</h1>
          <h2 className="text-2xl font-bold text-center text-black mb-4">川越　壮 / So Kawagoe</h2>
          
          {/* GitHubリンク */}
          <div className="flex justify-center mb-12">
            <a
              href="https://github.com/ks415"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 
                       text-white rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02 0 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
          
          {/* プロフィール */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Profile</h3>
            <ul className="text-gray-700 mb-4 space-y-2 list-disc list-inside">
              <li>2001年4月15日生まれ．愛知県出身．</li>
              <li>2021年より大阪府立大学に在学．知能メディア処理研究グループ所属．</li>
              <li>2025年から大阪公立大学大学院に進学予定．</li>
            </ul>
          </div>

          {/* 研究内容 */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Research</h3>
            <p className="text-gray-700 mb-4">
              専攻は画像認識であり，特に最近では自然言語を用いたVision-Language Modelの研究に興味があります．<br />
              現在は，画像認識タスクにおける自然言語の活用方法について研究を進めています．
            </p>
          </div>

          {/* スキル */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-2">Programming Languages</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Python</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>C</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Frameworks & Tools</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>PyTorch</li>
                  <li>Docker</li>
                  <li>React</li>
                  <li>Next.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 