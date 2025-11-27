import React from 'react';
import { Code, Database, PenTool, Globe, Cpu, LineChart, ArrowRight } from 'lucide-react';
import { Path } from '../types';

const paths: Path[] = [
  { id: '1', title: 'Desarrollo Fullstack', icon: 'Code', color: 'text-brand-primary', courseCount: 120 },
  { id: '2', title: 'Data Science & IA', icon: 'Database', color: 'text-blue-400', courseCount: 45 },
  { id: '3', title: 'Diseño UX/UI', icon: 'PenTool', color: 'text-purple-400', courseCount: 32 },
  { id: '4', title: 'Inglés Tech', icon: 'Globe', color: 'text-yellow-400', courseCount: 15 },
  { id: '5', title: 'DevOps & Cloud', icon: 'Cpu', color: 'text-red-400', courseCount: 28 },
  { id: '6', title: 'Marketing Growth', icon: 'LineChart', color: 'text-orange-400', courseCount: 50 },
];

const getIcon = (name: string, className: string) => {
    switch(name) {
        case 'Code': return <Code className={className} />;
        case 'Database': return <Database className={className} />;
        case 'PenTool': return <PenTool className={className} />;
        case 'Globe': return <Globe className={className} />;
        case 'Cpu': return <Cpu className={className} />;
        case 'LineChart': return <LineChart className={className} />;
        default: return <Code className={className} />;
    }
}

const PathGrid: React.FC = () => {
  return (
    <div className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="text-3xl font-bold text-white mb-3">Rutas de Especialización</h2>
                <p className="text-brand-light text-lg">Elige el camino para tu próximo salto profesional</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-brand-primary hover:text-white font-bold transition-colors">
                Ver catálogo completo <ArrowRight size={18} />
            </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {paths.map((path) => (
            <div 
                key={path.id} 
                className="group glass-card p-6 rounded-2xl hover:bg-brand-secondary transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center h-full justify-between border-t border-white/10"
            >
              <div className="flex-1 flex flex-col items-center justify-center">
                  <div className={`mb-4 p-4 rounded-2xl bg-white/5 group-hover:bg-brand-primary/20 transition-colors duration-300 ${path.color}`}>
                    {getIcon(path.icon, "w-8 h-8")}
                  </div>
                  <h3 className="font-bold text-white text-base mb-1 group-hover:text-brand-primary transition-colors">{path.title}</h3>
              </div>
              <span className="text-xs font-medium text-brand-light group-hover:text-white/80 mt-4">{path.courseCount} cursos</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PathGrid;