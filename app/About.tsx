import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-black mb-8">About</h2>
        <h1 className="text-2xl font-bold text-center text-black mb-4">川越　壮 / So Kawagoe</h1>
        
        <div className="flex justify-center mb-8">
          <a
            href="https://github.com/ks415"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02 0 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://qiita.com/ks415"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors text-sm ml-4"
          >
            <img
              src="/qiita-icon.png"
              alt="Qiita Icon"
              className="w-4 h-4 mr-1"
            />
            Qiita
          </a>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-700 mb-8">
            大阪府立大学 4回生 知能メディア処理研究グループ所属．<br />
            画像認識の研究に従事しており，特にVision-Language Modelに興味があります．
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link 
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg 
                       hover:bg-gray-700 transition-colors duration-200"
            >
              Read more
              <svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;