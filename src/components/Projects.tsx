import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExternalLink, Github, Play } from 'lucide-react';
import chessImg from './images/ChessMaster.png';
import gameImg from './images/unknownJourney.png';
import pwdImg from './images/PwdAnalyzer.png' 
import pingPongImg from './images/PingPongGame.png';

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const projects = [
    {
      title: 'Chess Web App',
      description: 'A chess application with AI opponent.',
      image: chessImg,
      tech: ['JavaScript', 'Typescript', 'Node.js', 'Tailwind CSS'],
      liveUrl: 'https://spontaneous-yeot-3e0563.netlify.app',
      githubUrl: 'https://github.com/AbhishekMK190/chessMaster.github.io'
    },
    {
      title: 'The Unknown Journey',
      description: 'A 2D adventure game with immersive storytelling and journey till the end.',
      image: gameImg,
      tech: ['Godot', 'GD script'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AbhishekMK190/The-Unknown-Journey'
    },
    {
      title: 'ML-Based Password Strength Analyzer',
      description: 'A ML based password strength analyzer that is useful to Accurately determine The strength of the password.',
      image: pwdImg,
      tech: ['Python', 'Tkinter', 'Scikit-learn', 'Pandas', 'Joblib', 'Regex'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AbhishekMK190/ML-based-Password-Strength-Analyzer'
    },
    {
      title: 'Network based Ping Pong Game',
      description: 'A simple network-based Ping Pong game with a server-client model. Two players can connect over the same network and play from separate computers.', 
      image: pingPongImg,
      tech: ['Python', 'Pygame', 'Socket Programming', 'Multithreading'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AbhishekMK190/Network-based-Ping-Pong-game'
    },
    {
      title: 'Learning Management System',
      description: 'A comprehensive LMS with course creation, student progress tracking, and interactive learning modules.',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Django', 'PostgreSQL', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency tracking application with portfolio management and price alerts.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'Node.js', 'CoinGecko API', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      {project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                          <Play size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;