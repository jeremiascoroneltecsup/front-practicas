import React from 'react';
import { PlayCircle, Shield, CheckCircle, Wrench } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm text-green-400 text-xs font-bold uppercase tracking-wider mb-8">
                <CheckCircle className="w-4 h-4 mr-2" />
                100% satisfacción garantizada
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Somos la plataforma de capacitación más grande de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Latinoamérica
              </span>
              <span className="text-white"> en Odoo</span>
            </h1>
            <p className="text-lg text-brand-light mb-10 max-w-lg leading-relaxed">
              Conviértete en experto de Odoo con nuestro Plan Completo. Más de 150 cursos, clases en vivo y proyectos reales para impulsar tu carrera.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-[0_8px_30px_rgba(34,197,94,0.4)]">
                <Wrench className="w-5 h-5 mr-2" />
                Conoce nuestros planes
              </button>
              <button className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white border-2 border-white/20 hover:bg-white/5 hover:border-white/50 transition-all">
                <PlayCircle className="w-5 h-5 mr-2 text-brand-primary" />
                Ver demo
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-brand-light">
                <div className="flex -space-x-3">
                    <img className="w-12 h-12 rounded-full border-2 border-[#0f1235]" src="https://picsum.photos/40/40?random=1" alt="Student" />
                    <img className="w-12 h-12 rounded-full border-2 border-[#0f1235]" src="https://picsum.photos/40/40?random=2" alt="Student" />
                    <img className="w-12 h-12 rounded-full border-2 border-[#0f1235]" src="https://picsum.photos/40/40?random=3" alt="Student" />
                    <img className="w-12 h-12 rounded-full border-2 border-[#0f1235]" src="https://picsum.photos/40/40?random=4" alt="Student" />
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-bold text-lg">+3,000 Alumnos</span>
                    <span className="text-sm opacity-70">Capacitados en Odoo</span>
                </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* ODOO Plan Box */}
            <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <div className="glass-card p-8 rounded-3xl shadow-2xl border border-white/10 bg-gradient-to-br from-purple-900/40 to-blue-900/40">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">PLAN COMPLETO</h3>
                        <h2 className="text-6xl font-black text-white tracking-wider">ODOO</h2>
                    </div>
                    
                    {/* Mini Modules Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="glass-card p-3 rounded-xl text-center hover:scale-105 transition-transform">
                            <div className="w-10 h-10 mx-auto mb-2 bg-blue-500 rounded-lg flex items-center justify-center">
                                <Wrench className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-[10px] text-white font-bold">Facturación</p>
                        </div>
                        <div className="glass-card p-3 rounded-xl text-center hover:scale-105 transition-transform">
                            <div className="w-10 h-10 mx-auto mb-2 bg-orange-500 rounded-lg flex items-center justify-center">
                                <Wrench className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-[10px] text-white font-bold">Punto de venta</p>
                        </div>
                        <div className="glass-card p-3 rounded-xl text-center hover:scale-105 transition-transform">
                            <div className="w-10 h-10 mx-auto mb-2 bg-yellow-500 rounded-lg flex items-center justify-center">
                                <Wrench className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-[10px] text-white font-bold">Ventas</p>
                        </div>
                        <div className="glass-card p-3 rounded-xl text-center hover:scale-105 transition-transform">
                            <div className="w-10 h-10 mx-auto mb-2 bg-cyan-500 rounded-lg flex items-center justify-center">
                                <Wrench className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-[10px] text-white font-bold">Sitio web</p>
                        </div>
                        <div className="glass-card p-3 rounded-xl text-center hover:scale-105 transition-transform">
                            <div className="w-10 h-10 mx-auto mb-2 bg-purple-500 rounded-lg flex items-center justify-center">
                                <Wrench className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-[10px] text-white font-bold">Comercio E.</p>
                        </div>
                        <div className="glass-card p-3 rounded-xl text-center hover:scale-105 transition-transform">
                            <div className="w-10 h-10 mx-auto mb-2 bg-pink-500 rounded-lg flex items-center justify-center">
                                <Wrench className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-[10px] text-white font-bold">CRM</p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <p className="text-yellow-400 font-bold text-lg mb-2">Y MÁS...</p>
                        <p className="text-white font-black text-sm uppercase tracking-wider">CURSOS ACTUALIZADOS</p>
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 animate-pulse shadow-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl -rotate-12 animate-bounce shadow-xl" style={{animationDuration: '3s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;