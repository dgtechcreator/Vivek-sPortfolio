import React from 'react';
import { ArrowRight, Code, Palette, Film } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import { fadeIn } from '../utils/animations';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatedBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center" {...fadeIn}>
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="../images/viveks.png"
              alt="Vivek Pal"
              className="relative w-40 h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg animate-float"
            />
          </div>

          <div className="relative">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              Vivek Pal
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm animate-hover">
                  <Code className="w-4 h-4 mr-2" />
                  Web Developer
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm animate-hover">
                  <Palette className="w-4 h-4 mr-2" />
                  Web Designer
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm animate-hover">
                  <Film className="w-4 h-4 mr-2" />
                  Animator
                </span>
              </div>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Crafting beautiful digital experiences through creative design,
              clean code, and engaging animations.
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
