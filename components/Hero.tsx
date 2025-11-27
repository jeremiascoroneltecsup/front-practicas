import React from 'react';
import { PlayCircle, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-sm text-brand-primary text-xs font-bold uppercase tracking-wider mb-8">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                Nuevo curso de Astro 4.0
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
              Domina el <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-300">
                código moderno
              </span>
            </h1>
            <p className="text-lg text-brand-light mb-10 max-w-lg leading-relaxed font-light">
              Fórmate como Desarrollador Fullstack con mentores expertos. Clases en vivo, proyectos reales y una comunidad que te impulsa.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-brand-primary hover:bg-red-500 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,69,32,0.4)]">
                Comenzar Carrera
              </button>
              <button className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white border border-white/20 hover:bg-white/5 hover:border-white/50 transition-all">
                <PlayCircle className="w-5 h-5 mr-2 text-brand-primary" />
                Clase Gratis
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm font-medium text-brand-light">
                <div className="flex -space-x-3">
                    <img className="w-10 h-10 rounded-full border-2 border-[#0f1235]" src="https://picsum.photos/32/32?random=1" alt="Student" />
                    <img className="w-10 h-10 rounded-full border-2 border-[#0f1235]" src="https://picsum.photos/32/32?random=2" alt="Student" />
                    <img className="w-10 h-10 rounded-full border-2 border-[#0f1235]" src="https://picsum.photos/32/32?random=3" alt="Student" />
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-bold">+5,000 Graduados</span>
                    <span className="text-xs opacity-70">Trabajando en tecnología</span>
                </div>
            </div>
          </div>

          <div className="relative hidden lg:block perspective-1000">
            {/* Visual Element - Glass Card Stack */}
            <div className="relative z-10 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700">
                <div className="glass-card p-2 rounded-2xl shadow-2xl border border-white/10">
                    <img 
                        src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Coding Environment" 
                        className="rounded-xl w-full h-auto shadow-inner"
                    />
                </div>
                
                {/* Decoration Elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-primary rounded-2xl flex items-center justify-center shadow-2xl animate-bounce" style={{animationDuration: '4s'}}>
                    <Shield className="w-12 h-12 text-white" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl flex items-center gap-4 animate-pulse">
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     <span className="font-mono text-sm font-bold text-green-400">Compilación Exitosa</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;