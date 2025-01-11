import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="text-center">
          <p className="text-gray-300">
            Email: <a href="mailto:kawauso415@gmail.com" className="hover:text-white underline">
              kawauso415@gmail.com
            </a>
          </p>
        </div>
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>© 2024 So Kawagoe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 