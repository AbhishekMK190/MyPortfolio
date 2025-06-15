<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect, useRef } from 'react';
>>>>>>> 40e643e (Files committed sucessfully)
import { Menu, X, Terminal as TerminalIcon } from 'lucide-react';
import Terminal from './Terminal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
<<<<<<< HEAD
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
=======
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);
  const windEffectRef = useRef<HTMLDivElement>(null);
>>>>>>> 40e643e (Files committed sucessfully)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setIsTerminalOpen(false); // Close terminal when navigating
=======
  const createWindParticles = () => {
    const windEffect = windEffectRef.current;
    if (!windEffect) return;

    // Clear existing particles
    windEffect.innerHTML = '';

    // Create new particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'wind-particle';
      
      // Random position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      // Random size
      const size = Math.random() * 4 + 2;
      
      // Random speed
      const speed = Math.random() * 2 + 1;
      
      // Random delay
      const delay = Math.random() * 0.5;
      
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animation = `windEffect ${speed}s ease-in-out ${delay}s`;
      
      windEffect.appendChild(particle);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsNavigating(true);
      createWindParticles();
      
      // Add active class to wind effect
      const windEffect = windEffectRef.current;
      if (windEffect) {
        windEffect.classList.add('active');
      }

      // Scroll to section with smooth behavior
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);

      // Remove active class after animation
      setTimeout(() => {
        if (windEffect) {
          windEffect.classList.remove('active');
        }
        setIsNavigating(false);
      }, 1000);
>>>>>>> 40e643e (Files committed sucessfully)
    }
  };

  const toggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen);
  };

<<<<<<< HEAD
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </div>
              
              {/* Terminal Toggle Button */}
              <button
                onClick={toggleTerminal}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isTerminalOpen 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                title="Open Terminal"
              >
                <TerminalIcon size={20} />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mb-4 p-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2 capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

=======
  const handleNavigate = (section: string) => {
    scrollToSection(section);
    // Close terminal after navigation
    setTimeout(() => {
      setIsTerminalOpen(false);
    }, 100); // Wait for scroll animation to complete
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white font-bold text-xl hover:text-blue-400 transition-colors"
              >
                Portfolio
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
              <button
                onClick={toggleTerminal}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isTerminalOpen 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30'
                }`}
                title="Open Interactive Terminal"
              >
                <TerminalIcon size={18} />
                <span>Terminal</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTerminal}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isTerminalOpen 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30'
                }`}
                title="Open Interactive Terminal"
              >
                <TerminalIcon size={18} />
                <span className="text-sm">Terminal</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Wind Effect */}
      <div ref={windEffectRef} className="wind-effect" />

>>>>>>> 40e643e (Files committed sucessfully)
      {/* Terminal Overlay */}
      {isTerminalOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div className="flex items-start justify-center pt-20 px-4 h-full">
            <div className="w-full max-w-4xl">
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-white text-lg font-semibold">Terminal Interface</h3>
                <button
                  onClick={() => setIsTerminalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                >
                  <X size={20} />
                </button>
              </div>
<<<<<<< HEAD
              <Terminal onNavigate={scrollToSection} />
=======
              <Terminal onNavigate={handleNavigate} currentSection={currentSection} />
>>>>>>> 40e643e (Files committed sucessfully)
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;