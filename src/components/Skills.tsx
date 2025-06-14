import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  Code2, 
  Database, 
  Palette, 
  Smartphone, 
  Globe, 
  GitBranch,
  Server,
  Layers
} from 'lucide-react';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'Javascript'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Python', 'MongoDB', 'MySQL'],
      color: 'from-green-400 to-green-600'
    },
    // {
    //   title: 'UI/UX Design',
    //   icon: Palette,
    //   skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing'],
    //   color: 'from-purple-400 to-purple-600'
    // },
    // {
    //   title: 'Mobile Development',
    //   icon: Smartphone,
    //   skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWAs'],
    //   color: 'from-teal-400 to-teal-600'
    // },
    // {
    //   title: 'Cloud & DevOps',
    //   icon: Globe,
    //   skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    //   color: 'from-orange-400 to-orange-600'
    // },
    {
      title: 'Tools & Workflow',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'VS Code', 'Socket Programming', 'Pygame', 'Tkinter', 'Scikit-learn', 'Pandas', 'NumPy'],
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className={`group hover:scale-105 transition-all duration-300 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <div key={skill} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                          <span className="text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;