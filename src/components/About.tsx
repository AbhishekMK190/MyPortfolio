import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import profileImg from './images/profile.png'

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
<<<<<<< HEAD
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
=======
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-transition`}>
>>>>>>> 40e643e (Files committed sucessfully)
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi! I'm Abhishek M.K, a passionate CS student and developer with hands-on experience in full-stack projects, ML, 
                and game development always eager to turn ideas into smart, practical solutions.              
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in Python, C/C++, Java and practical tech like ML, cybersecurity, and game development. 
                When I'm not coding, you'll find me solving problems,   
                learning something new, or building projects that turn ideas into reality.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My approach combines technical expertise with creative problem-solving to deliver 
                exceptional user experiences that make a real impact.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">6</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  {/* <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-gray-400">Years Experience</div> */}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="w-40 h-30 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
                    <img 
                      src={profileImg}
                      alt="Abhishek M.K" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Abhishek.M.Kalghatgi</h3>
                  <p className="text-gray-300 mb-4">Full Stack Developer</p>
                  <div className="flex justify-center space-x-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Java</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">C++</span>
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">HTML/CSS/Javascript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;