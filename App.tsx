import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import OdooModules from './components/OdooModules';
import PathGrid from './components/PathGrid';
import CourseList from './components/CourseList';
import Pricing from './components/Pricing';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import AiMentor from './components/AiMentor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white font-sans">
      <Navbar />
      <main className="space-y-20">
        <div id="hero">
          <Hero />
        </div>
        
        {/* Features - Metodología */}
        <Features />
        
        {/* Rutas y PathGrid */}
        <PathGrid />
        
        {/* Módulos de ODOO */}
        <div id="modulos">
          <OdooModules />
        </div>
        
        {/* Pricing Plans */}
        <div id="pricing">
          <Pricing />
        </div>

        {/* Cursos Gratuitos */}
        <div id="cursos">
          <CourseList />
        </div>
        
        {/* Instructors */}
        <Instructors />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Benefits */}
        <Benefits />
        
        {/* Live Classes Section - Updated Style */}
        <section className="py-20 relative">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-10">
                    <div className="flex h-4 w-4 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border-2 border-white"></span>
                    </div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">En vivo ahora mismo</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Class Card 1 */}
                    <div className="glass-card p-6 rounded-2xl hover:bg-brand-secondary transition-colors cursor-pointer group border-l-4 border-l-purple-500">
                        <div className="text-purple-400 text-xs font-black uppercase tracking-wider mb-3">18:00 - 20:00</div>
                        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">Implementación Odoo Facturación</h3>
                        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                            <img src="https://picsum.photos/32/32?random=50" className="w-10 h-10 rounded-full border border-white/10" alt="Instructor" />
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm">Carlos Pérez</span>
                                <span className="text-brand-light text-xs">Odoo Expert</span>
                            </div>
                            <button className="ml-auto bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">Entrar</button>
                        </div>
                    </div>
                     {/* Class Card 2 */}
                    <div className="glass-card p-6 rounded-2xl hover:bg-brand-secondary transition-colors cursor-pointer group border-l-4 border-l-blue-500">
                        <div className="text-blue-400 text-xs font-black uppercase tracking-wider mb-3">19:30 - 21:00</div>
                        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">Backend Odoo Avanzado</h3>
                        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                            <img src="https://picsum.photos/32/32?random=51" className="w-10 h-10 rounded-full border border-white/10" alt="Instructor" />
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm">Ana López</span>
                                <span className="text-brand-light text-xs">Senior Developer</span>
                            </div>
                             <button className="ml-auto bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">Entrar</button>
                        </div>
                    </div>
                     {/* Class Card 3 */}
                    <div className="glass-card p-6 rounded-2xl hover:bg-brand-secondary transition-colors cursor-pointer group border-l-4 border-l-green-500">
                        <div className="text-green-400 text-xs font-black uppercase tracking-wider mb-3">21:00 - 22:00</div>
                        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-green-400 transition-colors">Módulo Inventario Odoo</h3>
                        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                            <img src="https://picsum.photos/32/32?random=52" className="w-10 h-10 rounded-full border border-white/10" alt="Instructor" />
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm">Miguel Torres</span>
                                <span className="text-brand-light text-xs">Odoo Consultant</span>
                            </div>
                             <button className="ml-auto bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">Entrar</button>
                        </div>
                    </div>
                </div>
             </div>
        </section>

      </main>
      <Footer />
      <AiMentor />
    </div>
  );
}

export default App;