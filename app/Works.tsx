import React from 'react';

const Works: React.FC = () => {
    return (
        <section id="works" className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-black mb-8">Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">Project 1</h3>
                        <p className="text-gray-700">TODOリスト</p>
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">Project 2</h3>
                        <p className="text-gray-700">準備中</p>
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">Project 3</h3>
                        <p className="text-gray-700">準備中</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;