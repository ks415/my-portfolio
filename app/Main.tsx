import React from 'react';
import About from './About';
import Works from './Works';
import Footer from './Footer';

const Main = () => {
  return (
    <main>
      <div className="relative min-h-[90vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold drop-shadow-lg mb-4">So Kawagoe</h1>
          <h2 className="text-4xl font-bold drop-shadow-lg text-gray-700">Portfolio</h2>
        </div>
      </div>
      <About />
      <Works />
      <Footer />
    </main>
  );
};

export default Main;