import React from 'react';
import { TrendingUp, Briefcase, Target, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Ruta efectiva de aprendizaje",
      description: "Estudia Odoo siguiendo una ruta efectiva de cursos, diseñada para optimizar tu aprendizaje y dominio del sistema.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Trabaja a corto plazo",
      description: "Aprende Odoo, uno de los cursos más demandados, y encuentra trabajo de inmediato.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Mejores oportunidades laborales",
      description: "Capacítate en Odoo y accede a nuevas oportunidades laborales.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Aumenta tus ingresos y mejora tu vida",
      description: "Odoo optimiza tu negocio y te ayuda a incrementar tus ingresos de manera eficiente.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Ruta del <span className="text-brand-primary">éxito para tí</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform shadow-xl`}>
                {benefit.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{benefit.title}</h3>
              <p className="text-brand-light leading-relaxed text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Beneficios <span className="text-brand-primary">para ti</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Cursos de Odoo</h3>
              <p className="text-brand-light">Cursos de Odoo, el ERP líder a nivel mundial.</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Cursos Recomendados</h3>
              <p className="text-brand-light">Hemos capacitado a más de 3000 alumnos que nos recomiendan</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Acceso a sesiones en vivo</h3>
              <p className="text-brand-light">Solo para los estudiantes donde expondremos proyectos, experiencias y conocimientos.</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Metodología con enfoque práctico</h3>
              <p className="text-brand-light">Cursos desarrollados y aplicados en proyectos reales y casos prácticos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
