import React from 'react';
import Link from 'next/link';

const Works = () => {
    return (
        <section id="works" className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-black mb-8">Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <Link href="https://pokemon-app-three-gules.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="cursor-pointer">
                                <div className="w-full h-60 mb-4">
                                    <img 
                                        src="/pokemon-app.png" 
                                        alt="Project 2" 
                                        className="w-full h-full object-cover rounded hover:opacity-80 transition-opacity"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 hover:text-gray-600 transition-colors">ポケモン図鑑</h3>
                            </div>
                        </Link>
                        <p className="text-gray-700">PokemonAPIを使用したポケモン図鑑</p>
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <Link href="https://blog-with-react-and-firebase-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="cursor-pointer">
                                <div className="w-full h-60 mb-4">
                                    <img 
                                        src="/blog.png" 
                                        alt="Project 3" 
                                        className="w-full h-full object-cover rounded hover:opacity-80 transition-opacity"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 hover:text-gray-600 transition-colors">簡易掲示板</h3>
                            </div>
                        </Link>
                        <p className="text-gray-700">ReactとFirebaseを使用した簡易掲示板</p>
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        {/* <Link href="https://blog-with-react-and-firebase-six.vercel.app/" target="_blank" rel="noopener noreferrer"> */}
                            <div className="cursor-pointer">
                                <div className="w-full h-60 mb-4">
                                    <img 
                                        src="/preparing.png" 
                                        alt="Project 3" 
                                        className="w-full h-full object-cover rounded hover:opacity-80 transition-opacity"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 hover:text-gray-600 transition-colors">準備中</h3>
                            </div>
                        {/* </Link> */}
                        <p className="text-gray-700">準備中</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;