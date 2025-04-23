import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
            DevOps Engineer &<br /> Cloud Infrastructure Specialist
          </h1>
          <p className="text-2xl text-gray-300 mb-10">
            Building scalable, reliable, and secure cloud infrastructure with cutting-edge DevOps practices
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-2xl backdrop-blur-sm bg-opacity-80 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Cool subtle background animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full filter blur-3xl animate-pulse top-1/3 left-1/4"></div>
        <div className="absolute w-72 h-72 bg-purple-500 opacity-20 rounded-full filter blur-3xl animate-pulse top-2/3 right-1/4"></div>
      </div>
    </section>
  );
}

export default Hero;
