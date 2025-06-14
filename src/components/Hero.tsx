import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className={`text-center z-10 max-w-4xl mx-auto px-4 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Abhishek.M.Kalghatgi
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          Budding Full Stack Developer / Game Development Enthusiast
        </h2>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting functional, elegant, and impactful digital experiences—whether it's a web app or a game. Let’s build something meaningful together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/abhishekmk190" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-full"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/abhishek-m-kalghatgi-9b23a625b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-full"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:abkalghatgi1@gmail.com"
              className="p-3 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-full"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;