import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
=======
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
>>>>>>> 40e643e (Files committed sucessfully)
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;