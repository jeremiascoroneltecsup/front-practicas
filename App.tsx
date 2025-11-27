import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PathGrid from './components/PathGrid';
import CourseList from './components/CourseList';
import AiMentor from './components/AiMentor';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white font-sans">
      <Navbar />
      <main className="space-y-12">
        <Hero />
        <PathGrid />
        
        {/* Replaced generic banner with specific Pricing component requested */}
        <Pricing />

        <CourseList />
        
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
                    <div className="glass-card p-6 rounded-2xl hover:bg-brand-secondary transition-colors cursor-pointer group border-l-4 border-l-brand-primary">
                        <div className="text-brand-primary text-xs font-black uppercase tracking-wider mb-3">18:00 - 20:00</div>
                        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-brand-primary transition-colors">Taller de Figma Avanzado</h3>
                        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                            <img src="https://picsum.photos/32/32?random=50" className="w-10 h-10 rounded-full border border-white/10" alt="Instructor" />
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm">Marcela UX</span>
                                <span className="text-brand-light text-xs">Product Designer</span>
                            </div>
                            <button className="ml-auto bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">Entrar</button>
                        </div>
                    </div>
                     {/* Class Card 2 */}
                    <div className="glass-card p-6 rounded-2xl hover:bg-brand-secondary transition-colors cursor-pointer group border-l-4 border-l-blue-500">
                        <div className="text-blue-400 text-xs font-black uppercase tracking-wider mb-3">19:30 - 21:00</div>
                        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">Deploy con Docker & AWS</h3>
                        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                            <img src="https://picsum.photos/32/32?random=51" className="w-10 h-10 rounded-full border border-white/10" alt="Instructor" />
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm">Esteban Code</span>
                                <span className="text-brand-light text-xs">DevOps Engineer</span>
                            </div>
                             <button className="ml-auto bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">Entrar</button>
                        </div>
                    </div>
                     {/* Class Card 3 */}
                    <div className="glass-card p-6 rounded-2xl hover:bg-brand-secondary transition-colors cursor-pointer group border-l-4 border-l-yellow-500">
                        <div className="text-yellow-400 text-xs font-black uppercase tracking-wider mb-3">21:00 - 22:00</div>
                        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-yellow-400 transition-colors">English Speaking Club</h3>
                        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                            <img src="https://picsum.photos/32/32?random=52" className="w-10 h-10 rounded-full border border-white/10" alt="Instructor" />
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm">Teacher Sarah</span>
                                <span className="text-brand-light text-xs">Native Speaker</span>
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