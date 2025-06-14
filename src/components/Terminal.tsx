import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  onNavigate: (section: string) => void;
}

interface CommandHistory {
  command: string;
  output: string;
  isError?: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ onNavigate }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: '',
      output: 'Welcome to Abhishek\'s Portfolio Terminal! Type "help" to see available commands.'
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: 'Available commands:\n  home     - Navigate to home section\n  about    - Navigate to about section\n  skills   - Navigate to skills section\n  projects - Navigate to projects section\n  contact  - Navigate to contact section\n  clear    - Clear terminal\n  whoami   - Display user info\n  ls       - List available sections\n  pwd      - Show current location',
    home: 'Navigating to home section...',
    about: 'Navigating to about section...',
    skills: 'Navigating to skills section...',
    projects: 'Navigating to projects section...',
    contact: 'Navigating to contact section...',
    clear: '',
    whoami: 'abhishek\nFull Stack Developer & Game Development Enthusiast\nCS Student passionate about creating innovative solutions',
    ls: 'home/\nabout/\nskills/\nprojects/\ncontact/',
    pwd: '/home/abhishek/portfolio'
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    let output = '';
    let isError = false;

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
      isError = true;
    }

    setHistory(prev => [...prev, { command: cmd, output, isError }]);
    
    // Add to command history if not empty
    if (trimmedCmd !== '') {
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
      </div>
    </div>
  );
};

export default Terminal;