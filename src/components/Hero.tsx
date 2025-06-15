import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

<<<<<<< HEAD
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
=======
interface TypewriterTextProps {
  text: string;
  onComplete?: () => void;
  delay?: number;
  reverse?: boolean;
  hideCursorOnComplete?: boolean;
}

const TypewriterText = ({ text, onComplete, delay = 0, reverse = false, hideCursorOnComplete = false }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    if (hasStarted) {
      if (!reverse && currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else if (reverse && currentIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else if (onComplete) {
        setIsComplete(true);
        onComplete();
      }
    }
  }, [currentIndex, text, onComplete, delay, hasStarted, reverse]);

  return (
    <span>
      {displayText}
      {(!hideCursorOnComplete || !isComplete) && (
        <span className={`inline-block w-[2px] h-[1em] bg-current ml-[2px] align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
      )}
    </span>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isReversing, setIsReversing] = useState(false);
>>>>>>> 40e643e (Files committed sucessfully)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

<<<<<<< HEAD
=======
  const titles = [
    "Budding Full Stack Developer",
    "Game Development Enthusiast"
  ];

  const handleTitleComplete = () => {
    if (!isReversing) {
      // After typing is complete, wait a bit then start reversing
      setTimeout(() => {
        setIsReversing(true);
      }, 3000);
    } else {
      // After reverse typing is complete, move to next titles
      setIsReversing(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }
  };

>>>>>>> 40e643e (Files committed sucessfully)
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
<<<<<<< HEAD
            Abhishek.M.Kalghatgi
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          Budding Full Stack Developer / Game Development Enthusiast
        </h2>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting functional, elegant, and impactful digital experiences—whether it's a web app or a game. Let's build something meaningful together.
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
=======
            <TypewriterText 
              text="Abhishek.M.Kalghatgi"
              delay={0}
              onComplete={() => setCurrentLine(1)}
            />
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light min-h-[2em]">
          {currentLine >= 1 && (
            <TypewriterText 
              text={titles[titleIndex]}
              delay={0}
              reverse={isReversing}
              onComplete={handleTitleComplete}
            />
          )}
        </h2>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed min-h-[4em]">
          {currentLine >= 1 && (
            <TypewriterText 
              text="Crafting functional, elegant, and impactful digital experiences—whether it's a web app or a game. Let's build something meaningful together."
              delay={0}
              hideCursorOnComplete={true}
            />
          )}
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/AbhishekMK190"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-m-kalghatgi-190/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:abkalghatgi1@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-white transition-colors duration-200 animate-bounce"
>>>>>>> 40e643e (Files committed sucessfully)
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;