import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-8">About</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          2001年4月15日生まれ．愛知県出身．
        </p>
      </div>
    </section>
  );
};

export default About;