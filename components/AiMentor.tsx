import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User as UserIcon, Minimize2, Maximize2 } from 'lucide-react';
import { streamCareerAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiMentor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy tu Mentor Fullstack. 🚀 ¿Qué meta profesional quieres alcanzar hoy?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    let fullResponse = '';
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    await streamCareerAdvice(userMsg, (chunk) => {
      fullResponse += chunk;
      setMessages(prev => {
        const newArr = [...prev];
        if (newArr.length > 0) {
            newArr[newArr.length - 1] = { role: 'model', text: fullResponse };
        }
        return newArr;
      });
    });

    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-brand-primary hover:bg-red-500 text-white px-6 py-4 rounded-full shadow-2xl shadow-brand-primary/30 transition-all transform hover:scale-105 group border border-white/20"
      >
        <div className="relative">
            <Sparkles className="w-6 h-6 animate-pulse text-white" />
        </div>
        <span className="font-bold text-lg tracking-wide">Mentor IA</span>
      </button>
    );
  }

  return (
    <div className={`fixed z-50 transition-all duration-300 ease-in-out glass-card border border-white/20 shadow-2xl overflow-hidden flex flex-col
        ${isMinimized 
            ? 'bottom-6 right-6 w-80 h-16 rounded-2xl cursor-pointer hover:bg-brand-secondary' 
            : 'bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[400px] h-[80vh] sm:h-[600px] rounded-t-2xl sm:rounded-2xl'
        }
    `}>
      {/* Header */}
      <div 
        className="bg-brand-secondary/80 backdrop-blur-xl p-4 border-b border-white/10 flex justify-between items-center cursor-pointer"
        onClick={() => isMinimized ? setIsMinimized(false) : null}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center shadow-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">Fullstack Mentor</h3>
            <p className="text-[10px] text-green-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              Online
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
            {!isMinimized && (
                <button 
                    onClick={(e) => { e.stopPropagation(); setIsMinimized(true); }}
                    className="p-2 hover:bg-white/10 rounded-lg text-brand-light hover:text-white"
                >
                    <Minimize2 className="w-4 h-4" />
                </button>
            )}
            {isMinimized && (
                <button 
                    onClick={(e) => { e.stopPropagation(); setIsMinimized(false); }}
                    className="p-2 hover:bg-white/10 rounded-lg text-brand-light hover:text-white"
                >
                    <Maximize2 className="w-4 h-4" />
                </button>
            )}
            <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                className="p-2 hover:bg-red-500/20 rounded-lg text-brand-light hover:text-red-400"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
      </div>

      {/* Chat Area */}
      {!isMinimized && (
        <>
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-transparent scrollbar-hide">
                {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex max-w-[85%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1 border border-white/10 shadow-sm
                        ${msg.role === 'user' ? 'bg-slate-700' : 'bg-brand-secondary'}`}>
                        {msg.role === 'user' ? <UserIcon className="w-4 h-4 text-slate-300" /> : <Sparkles className="w-4 h-4 text-brand-primary" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm
                        ${msg.role === 'user' 
                        ? 'bg-brand-primary text-white font-medium rounded-tr-none' 
                        : 'bg-white/10 backdrop-blur-sm text-gray-100 rounded-tl-none border border-white/5'}`}>
                        {msg.text}
                    </div>
                    </div>
                </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="flex gap-2 bg-white/5 p-4 rounded-2xl rounded-tl-none items-center ml-11 border border-white/5">
                            <div className="w-1.5 h-1.5 bg-brand-light rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                            <div className="w-1.5 h-1.5 bg-brand-light rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                            <div className="w-1.5 h-1.5 bg-brand-light rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-brand-secondary/90 border-t border-white/10 backdrop-blur-xl">
                <div className="relative flex items-center gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Pregunta sobre cursos o carreras..."
                    disabled={isLoading}
                    className="flex-1 bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors disabled:opacity-50 placeholder-brand-light"
                />
                <button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isLoading}
                    className="p-3 bg-brand-primary text-white rounded-xl hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                    <Send className="w-4 h-4" />
                </button>
                </div>
            </div>
        </>
      )}
    </div>
  );
};

export default AiMentor;