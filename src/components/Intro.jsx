import React from "react";

const Intro = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-black via-purple-600 to-pink-300 h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-white mb-6 text-center">
            Build Develop Conquer
          </h1>
          <div className="flex space-x-12">
            <div className="bg-white text-center p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-purple-700">100+</h2>
              <p className="text-xl text-gray-700">Teams Participated</p>
            </div>
            <div className="bg-white text-center p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-purple-700">500+</h2>
              <p className="text-xl text-gray-700">Robots Designed</p>
            </div>
            <div className="bg-white text-center p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-purple-700">50+</h2>
              <p className="text-xl text-gray-700">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
