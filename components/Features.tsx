import React from 'react';
import { Clock, BookOpen, Code, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Metodología",
      description: "Cursos 24/7 y clases en vivo mensuales para reforzar y resolver dudas sobre Odoo. Estudia a tu ritmo."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Más de 150 cursos",
      description: "Aprende Odoo desde la configuración hasta personalizaciones avanzadas."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Proyectos con código fuente",
      description: "Aprende Odoo con proyectos y su código fuente para mejorar tus habilidades."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Clases en vivo Odoo Backend",
      description: "Accede a 12 clases en vivo al año, con 8 horas mensuales, para reforzar y resolver dudas sobre Odoo Backend y clases de Odoo Funcional."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-purple-600 text-white mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-brand-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
