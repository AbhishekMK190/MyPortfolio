import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal as TerminalIcon } from 'lucide-react';
import Terminal from './Terminal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setIsTerminalOpen(false); // Close terminal when navigating
    }
  };

  const toggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen);
  };

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
              <Terminal onNavigate={scrollToSection} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;