<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  onNavigate: (section: string) => void;
}
=======
import React, { useState, useRef, useEffect } from 'react';
>>>>>>> 40e643e (Files committed sucessfully)

interface CommandHistory {
  command: string;
  output: string;
  isError?: boolean;
}

<<<<<<< HEAD
const Terminal: React.FC<TerminalProps> = ({ onNavigate }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: '',
      output: 'Welcome to Abhishek\'s Portfolio Terminal! Type "help" to see available commands.'
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
=======
interface TerminalProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

type CommandFunction = (() => string) | ((args: string) => string) | (() => Promise<string>);

interface Commands {
  [key: string]: string | CommandFunction;
}

const Terminal: React.FC<TerminalProps> = ({ onNavigate, currentSection: propCurrentSection }) => {
  const [input, setInput] = useState('');
  const [currentSection, setCurrentSection] = useState(propCurrentSection);
  const welcomeMessage = {
    command: '',
    output: 'Welcome to Abhishek\'s Portfolio Terminal! Type "help" to see available commands.'
  };
  
  // Initialize history with welcome message only if it's empty
  const [history, setHistory] = useState<CommandHistory[]>(() => {
    const savedHistory = sessionStorage.getItem('terminalHistory');
    return savedHistory ? JSON.parse(savedHistory) : [welcomeMessage];
  });
  
  const [commandHistory, setCommandHistory] = useState<string[]>(() => {
    const savedCommands = sessionStorage.getItem('terminalCommands');
    return savedCommands ? JSON.parse(savedCommands) : [];
  });
  
>>>>>>> 40e643e (Files committed sucessfully)
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

<<<<<<< HEAD
  const commands = {
    help: 'Available commands:\n  home     - Navigate to home section\n  about    - Navigate to about section\n  skills   - Navigate to skills section\n  projects - Navigate to projects section\n  contact  - Navigate to contact section\n  clear    - Clear terminal\n  whoami   - Display user info\n  ls       - List available sections\n  pwd      - Show current location',
=======
  // Update currentSection when prop changes
  useEffect(() => {
    setCurrentSection(propCurrentSection);
  }, [propCurrentSection]);

  // Save history to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('terminalHistory', JSON.stringify(history));
  }, [history]);

  // Save command history to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('terminalCommands', JSON.stringify(commandHistory));
  }, [commandHistory]);

  const getCurrentDateTime = (): string => {
    const now = new Date();
    return now.toLocaleString();
  };

  const getWeather = async (): Promise<string> => {
    try {
      // You'll need to replace this with your actual weather API key and location
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=YOUR_API_KEY&units=metric');
      const data = await response.json();
      return `Weather in Mumbai:\nTemperature: ${data.main.temp}°C\nCondition: ${data.weather[0].description}`;
    } catch (error) {
      return 'Unable to fetch weather data. Please try again later.';
    }
  };

  const socialLinks = {
    github: 'https://github.com/AbhishekMk190',
    linkedin: 'https://www.linkedin.com/in/abhishek-m-kalghatgi-9b23a625b/',
    email: 'abkalghatgi1@gmail.com'
  };

  const downloadResume = (): string => {
    // Replace with your actual resume file path
    window.open('/path-to-your-resume.pdf', '_blank');
    return 'Opening resume...';
  };

  const commands: Commands = {
    help: 'Available commands:\n  home     - Navigate to home section\n  about    - Navigate to about section\n  skills   - Navigate to skills section\n  projects - Navigate to projects section\n  contact  - Navigate to contact section\n  clear    - Clear terminal\n  whoami   - Display user info\n  date     - Show current date and time\n  weather  - Show weather in your location\n  social   - Display social media links\n  resume   - Download resume',
>>>>>>> 40e643e (Files committed sucessfully)
    home: 'Navigating to home section...',
    about: 'Navigating to about section...',
    skills: 'Navigating to skills section...',
    projects: 'Navigating to projects section...',
    contact: 'Navigating to contact section...',
    clear: '',
<<<<<<< HEAD
    whoami: 'abhishek\nFull Stack Developer & Game Development Enthusiast\nCS Student passionate about creating innovative solutions',
    ls: 'home/\nabout/\nskills/\nprojects/\ncontact/',
    pwd: '/home/abhishek/portfolio'
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
=======
    whoami: 'Abhishek.M.Kalghatgi\nFull Stack Developer & Game Development Enthusiast\nCS Student passionate about creating innovative solutions',
    date: getCurrentDateTime,
    weather: getWeather,
    social: () => `Social Media Links:\nGitHub: <a href="${socialLinks.github}" target="_blank" class="text-blue-400 hover:text-blue-300 underline">${socialLinks.github}</a>\nLinkedIn: <a href="${socialLinks.linkedin}" target="_blank" class="text-blue-400 hover:text-blue-300 underline">${socialLinks.linkedin}</a>\nEmail: ${socialLinks.email}`,
    resume: downloadResume
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const [command, ...args] = trimmedCmd.split(' ');

    if (command === 'clear') {
      setHistory([welcomeMessage]);
>>>>>>> 40e643e (Files committed sucessfully)
      return;
    }

    let output = '';
    let isError = false;
<<<<<<< HEAD

    if (commands[trimmedCmd as keyof typeof commands]) {
      output = commands[trimmedCmd as keyof typeof commands];
      
      // Navigate to section if it's a navigation command
      if (['home', 'about', 'skills', 'projects', 'contact'].includes(trimmedCmd)) {
        setTimeout(() => {
          onNavigate(trimmedCmd);
        }, 500);
      }
    } else if (trimmedCmd === '') {
      output = '';
    } else {
      output = `command not found: ${trimmedCmd}`;
=======
    
    if (commands[command]) {
      const commandOutput = commands[command];
      
      try {
        if (typeof commandOutput === 'function') {
          const result = commandOutput(args.join(' '));
          if (result instanceof Promise) {
            output = await result;
          } else {
            output = result;
          }
        } else {
          output = commandOutput;
        }
        
        // Navigate to section if it's a navigation command
        if (['home', 'about', 'skills', 'projects', 'contact'].includes(command)) {
          if (command === currentSection) {
            output = `You are already in the ${command} section.`;
          } else {
            setCurrentSection(command);
            setTimeout(() => {
              onNavigate(command);
            }, 500);
          }
        }
      } catch (error) {
        output = `Error executing command: ${error}`;
        isError = true;
      }
    } else if (command === '') {
      output = '';
    } else {
      output = `command not found: ${command}`;
>>>>>>> 40e643e (Files committed sucessfully)
      isError = true;
    }

    setHistory(prev => [...prev, { command: cmd, output, isError }]);
    
    // Add to command history if not empty
<<<<<<< HEAD
    if (trimmedCmd !== '') {
=======
    if (command !== '') {
>>>>>>> 40e643e (Files committed sucessfully)
      setCommandHistory(prev => [...prev, cmd]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

<<<<<<< HEAD
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <TerminalIcon size={16} className="text-gray-400" />
            <span className="text-gray-300 text-sm font-mono">abhishek@portfolio:~</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="bg-black p-4 h-64 overflow-y-auto font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Command History */}
          {history.map((entry, index) => (
            <div key={index} className="mb-2">
              {entry.command && (
                <div className="flex items-center">
                  <span className="text-green-400">Abhishek@profile:~$</span>
                  <span className="text-white ml-2">{entry.command}</span>
                </div>
              )}
              {entry.output && (
                <div className={`whitespace-pre-line ${entry.isError ? 'text-red-400' : 'text-gray-300'} ${entry.command ? 'mt-1' : ''}`}>
                  {entry.output}
                </div>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-green-400">Abhishek@profile:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent text-white ml-2 flex-1 outline-none font-mono caret-white"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>
      </div>

      {/* Terminal Instructions */}
      <div className="mt-4 text-center">
        <p className="text-gray-400 text-sm">
          💡 Try typing <span className="text-blue-400 font-mono">help</span> to see available commands, or use <span className="text-blue-400 font-mono">↑↓</span> arrows to navigate command history
        </p>
=======
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-4 font-mono text-sm">
      <div className="flex items-center mb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-2 text-gray-400">Terminal</div>
      </div>
      <div 
        ref={terminalRef}
        className="bg-black rounded p-4 h-64 overflow-y-auto"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Command History */}
        {history.map((entry, index) => (
          <div key={index} className="mb-2">
            {entry.command && (
              <div className="flex items-center">
                <span className="text-green-400">Abhishek@profile:~$</span>
                <span className="text-white ml-2">{entry.command}</span>
              </div>
            )}
            {entry.output && (
              <div 
                className={`whitespace-pre-line ${entry.isError ? 'text-red-400' : 'text-gray-300'} ${entry.command ? 'mt-1' : ''}`}
                dangerouslySetInnerHTML={{ __html: entry.output }}
              />
            )}
          </div>
        ))}

        {/* Current Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-green-400">Abhishek@profile:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none text-white ml-2 flex-1"
            autoFocus
          />
        </form>
>>>>>>> 40e643e (Files committed sucessfully)
      </div>
    </div>
  );
};

export default Terminal;